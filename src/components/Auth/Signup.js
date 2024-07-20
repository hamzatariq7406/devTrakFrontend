import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Signup() {
	return (
		<>
			<Col md={5} className=" p-5 bg-white full-height">
				<div className="login-main-left">
					<div className="text-center mb-5 login-main-left-header pt-4">
						<img
							src="/img/favicon.png"
							className="img-fluid"
							alt="LOGO"
						/>
						<h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
						<p>
							It is a long established fact that a reader <br />{" "}
							will be distracted by the readable.
						</p>
					</div>
					<Form>
						<Form.Group>
							<Form.Label>Mobile Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter mobile number"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Promocode</Form.Label>
							<Form.Control type="text" placeholder="Promocode" />
						</Form.Group>

						<div className="mt-4">
							<Row>
								<Col>
									<Button
										variant="outline-primary"
										size="lg"
										block
									>
										Sign In
									</Button>
								</Col>
							</Row>
						</div>
					</Form>

					<div className="text-center mt-5">
						<p className="light-gray">
							Already have an account?{" "}
							<Link to="/auth/login">Log In</Link>
						</p>
					</div>
				</div>
			</Col>
		</>
	);
}

export default Signup;
