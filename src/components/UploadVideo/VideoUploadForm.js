import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function VideoUploadForm({ onSubmit }) {
	return (
		<>
			<Row>
				<Col lg={12}>
					<div className="osahan-form">
						<Row>
							<Col lg={12}>
								<Form.Group controlId="video-title">
									<Form.Label>Race Title</Form.Label>
									<Form.Control
										type="text"
										placeholder="Type here..."
									/>
								</Form.Group>
							</Col>
							<Col lg={12}>
								<Form.Group controlId="video-description">
									<Form.Label>About</Form.Label>
									<Form.Control
										as="textarea"
										rows={3}
										placeholder="Description"
									/>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col lg={3}>
								<Form.Group controlId="video-orientation">
									<Form.Label>Orientation</Form.Label>
									<Form.Control
										as="select"
										className="custom-select"
										custom
									>
										<option>Straight</option>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Form.Control>
								</Form.Group>
							</Col>
							<Col lg={3}>
								<Form.Group controlId="video-privacy">
									<Form.Label>Privacy Settings</Form.Label>
									<Form.Control
										as="select"
										className="custom-select"
										custom
									>
										<option>Public</option>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Form.Control>
								</Form.Group>
							</Col>

							<Col lg={3}>
								<Form.Group controlId="video-monetization">
									<Form.Label>No. of Cars</Form.Label>
									<Form.Control
										as="select"
										className="custom-select"
										custom
									>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Form.Control>
								</Form.Group>
							</Col>

							<Col lg={3}>
								<Form.Group controlId="video-license">
									<Form.Label>Track</Form.Label>
									<Form.Control
										as="select"
										className="custom-select"
										custom
									>
										<option>Standard</option>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Form.Control>
								</Form.Group>
							</Col>
						</Row>

						{/* <Row>
							<Col lg={5}>
								<Form.Group controlId="video-tags">
									<Form.Label>
										Tags (13 tags remaining)
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Gaming, PS4"
									/>
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group controlId="video-casting">
									<Form.Label>Cast (Optional)</Form.Label>
									<Form.Control
										type="text"
										placeholder="Nathan Drake,"
									/>
								</Form.Group>
							</Col>
							<Col lg={3}>
								<Form.Group controlId="video-language">
									<Form.Label>
										Language inn Video (Optional)
									</Form.Label>
									<Form.Control as="select" custom>
										<option>English</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Form.Control>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col lg={12}>
								<div className="main-title">
									<h6>
										Category ( you can select upto 6
										categories )
									</h6>
								</div>
							</Col>
						</Row>

						<Row className="category-checkbox">
							<Col lg={2} xs={4}>
								<Form.Check
									type="checkbox"
									custom
									label="Abaft"
									id="customCheck1"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Brick"
									id="customCheck2"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Purpose"
									id="customCheck3"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Shallow"
									id="customCheck4"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Spray"
									id="customCheck5"
								/>
							</Col>

							<Col lg={2} xs={4}>
								<Form.Check
									type="checkbox"
									custom
									label="Cemetery"
									id="zcustomCheck1"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Trouble"
									id="zcustomCheck2"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Pin"
									id="zcustomCheck3"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Fall"
									id="zcustomCheck4"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Leg"
									id="zcustomCheck5"
								/>
							</Col>

							<Col lg={2} xs={4}>
								<Form.Check
									type="checkbox"
									custom
									label="Scissors"
									id="czcustomCheck1"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Stitch"
									id="czcustomCheck2"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Agonizing"
									id="czcustomCheck3"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Rescue"
									id="czcustomCheck4"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Quiet"
									id="czcustomCheck5"
								/>
							</Col>
							<Col lg={2} xs={4}>
								<Form.Check
									type="checkbox"
									custom
									label="Abaft"
									id="customCheck1"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Brick"
									id="customCheck2"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Purpose"
									id="customCheck3"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Shallow"
									id="customCheck4"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Spray"
									id="customCheck5"
								/>
							</Col>

							<Col lg={2} xs={4}>
								<Form.Check
									type="checkbox"
									custom
									label="Cemetery"
									id="zcustomCheck1"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Trouble"
									id="zcustomCheck2"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Pin"
									id="zcustomCheck3"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Fall"
									id="zcustomCheck4"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Leg"
									id="zcustomCheck5"
								/>
							</Col>

							<Col lg={2} xs={4}>
								<Form.Check
									type="checkbox"
									custom
									label="Scissors"
									id="czcustomCheck1"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Stitch"
									id="czcustomCheck2"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Agonizing"
									id="czcustomCheck3"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Rescue"
									id="czcustomCheck4"
								/>
								<Form.Check
									type="checkbox"
									custom
									label="Quiet"
									id="czcustomCheck5"
								/>
							</Col>
						</Row> */}
					</div>
					<div className="osahan-area text-center mt-3">
						<Button variant="outline-primary" onClick={onSubmit}>Save Changes</Button>
					</div>
				</Col>
			</Row>
			<Terms />
		</>
	);
}

function Terms() {
	return (
		<>
			<hr />
			<div className="terms text-center">
				<p className="mb-0">
					There are many variations of passages of Lorem Ipsum
					available, but the majority <a href="#">Terms of Service</a>{" "}
					and <a href="#">Community Guidelines</a>.
				</p>
				<p className="hidden-xs mb-0">
					Ipsum is therefore always free from repetition, injected
					humour, or non
				</p>
			</div>
		</>
	);
}
