import "./UploadVideo.css";
import React, { useState } from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";


const UploadingListItem = ({ file, thumbnails, uploadStatus }) => {

    return (

        <Row>
            <Col lg={2}>
                <div className="imgplace">
                    <img className="img-fluid" src={thumbnails[file.name]} alt={`${file.name}`} />
                </div>
            </Col>

            <Col lg={10}>
                <div className="osahan-title">
                    {uploadStatus[file.name] && (
                        <span>{uploadStatus[file.name]}</span>
                    )}
                </div>
                <div className="osahan-size">
                    {Number(file.size) / (1024 * 1024)} MB . 2:13 MIN Remaining
                </div>
                <div className="osahan-progress">
                    {/* <ProgressBar striped animated now={uploadStatus[file.name]} /> */}

                    <div className="osahan-close">
                        <a href="#">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </a>
                    </div>
                </div>
                <div className="osahan-desc">
                    Your Video is still uploading, please keep this
                    page open until it's done.
                </div>
            </Col>
        </Row>
    )
}

export default UploadingListItem
