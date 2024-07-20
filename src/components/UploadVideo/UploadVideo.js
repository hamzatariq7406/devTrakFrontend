import "./UploadVideo.css";
import React, { useState } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { HeadingWrapper } from "../Atomics/SectionHeader/SectionHeader";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

import VideoUploadForm from "./VideoUploadForm";
import UploadingListItem from "./UploadingListItem";
import AWS from 'aws-sdk';


const UploadVideo = () => {



	const [selectedFiles, setSelectedFiles] = useState(null);
	const [uploadStatus, setUploadStatus] = useState({});
	const [thumbnails, setThumbnails] = useState({});


	AWS.config.update({
		accessKeyId: "XXX",
		secretAccessKey: "XXX",
		region: "XXX",
	});

	const s3 = new AWS.S3();


	const handleFileChange = (event) => {
		const files = Array.from(event.target.files);
		setSelectedFiles(files);
		generateThumbnails(files);
	};

	const generateThumbnails = (files) => {
		files.forEach(file => {
			if (file.type.startsWith('video/')) {
				const video = document.createElement('video');
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');

				video.src = URL.createObjectURL(file);
				video.currentTime = 1; // Capture frame at 1 second
				video.onloadeddata = () => {
					video.addEventListener('seeked', () => {
						canvas.width = video.videoWidth;
						canvas.height = video.videoHeight;
						ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
						const thumbnailUrl = canvas.toDataURL();
						setThumbnails(prevThumbnails => ({
							...prevThumbnails,
							[file.name]: thumbnailUrl
						}));
					});
				};
			}
		});
	};

	const uploadToS3 = (file) => {
		const params = {
			Bucket: "autotrak.ai/raw_video",
			Key: file.name,
			Body: file,
			ContentType: file.type,
		};

		s3.upload(params, (err, data) => {
			if (err) {
				console.error(err);
				setUploadStatus(prevStatus => ({
					...prevStatus,
					[file.name]: 'Failed'
				}));
			} else {
				console.log(data);
				setUploadStatus(prevStatus => ({
					...prevStatus,
					[file.name]: 'Uploaded'
				}));
			}
		});
	};

	const handleUpload = () => {
		selectedFiles.forEach(file => {
			uploadToS3(file);
		});
	};



	return (
		<>
			<ContentWrapper>
				<Container fluid className="upload-details">
					<Row className="row-gap">
						<Col xs={12}>
							<HeadingWrapper heading="Uploading Details" />
						</Col>
						<Col xs={12}>
							<input type="file" onChange={handleFileChange} multiple />
						</Col>
						{
							Array.from(selectedFiles ? selectedFiles : []).map((file, index) =>
								<Col xs={12}>
									<UploadingListItem file={file} uploadStatus={uploadStatus} thumbnails={thumbnails} />
								</Col>
							)
						}
					</Row>
					<hr />

					<VideoUploadForm onSubmit={handleUpload} />
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default UploadVideo;
