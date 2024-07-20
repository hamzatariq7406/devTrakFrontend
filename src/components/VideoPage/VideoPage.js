import "./VideoPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

import VideoCardList from "./VideoCardList";
import SingleVideoRight from "./SingleVideoRight";
import SingleVideoLeft from "./SingleVideoLeft";

const VideoPage = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid>
					<div className="video-block-right-list section-padding">
						<Row className="mb-4">
							<Col md={8}>
								<div className="single-video">
									<iframe
										title="Youtube Video"
										width="100%"
										height="315"
										src="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&amp;controls=0&amp;showinfo=0"
										frameborder="0"
										allow=" encrypted-media"
										allowfullscreen
									></iframe>
								</div>
							</Col>

							<Col md={4}>
								<div className="video-slider-right-list">
									{Array.from({ length: 6 }).map((_, i) => (
										<VideoCardList
											key={i}
											imgSrc="img/v1.png"
											time="3:50"
											videoTitle={`Car Number #${i + 1}`}
											views="1.8M"
											timeAgo="11 Months"
											videoCategory="McLaren MP4/4"
											verified
										/>
									))}
								</div>
							</Col>
						</Row>
					</div>

					<div className="video-block section-padding">
						<Row>
							<Col md={8}>
								<SingleVideoLeft />
							</Col>

							<Col md={4}>
								<SingleVideoRight />
							</Col>
						</Row>
					</div>
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default VideoPage;
