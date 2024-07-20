import "./AddCar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, FormControl } from 'react-bootstrap';
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import AWS from 'aws-sdk';

const AddCar = () => {
    const images = [
        { src: 'path/to/image1.jpg', alt: 'Image 1' },
        { src: 'path/to/image2.jpg', alt: 'Image 2' },
        { src: 'path/to/image3.jpg', alt: 'Image 3' },
        // Add more images as needed
    ];


    return (
        <>
            <ContentWrapper>
                <Container fluid className="pb-0">
                    <Row className="mb-3">
                        <Col>
                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="Car Number"
                                    className="me-2"
                                    aria-label="Car Number"
                                />
                                <Button variant="outline-success">Train</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        {images.map((image, index) => (
                            <Col xs={12} md={4} lg={3} key={index}>
                                <img src={image.src} alt={image.alt} className="img-fluid" />
                            </Col>
                        ))}
                    </Row>
                </Container>

                <ThinFooter />
            </ContentWrapper>
        </>
    );
};

export default AddCar;
