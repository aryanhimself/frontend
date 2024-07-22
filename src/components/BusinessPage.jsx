import React from "react";
import moment from "moment";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { authAxios } from "../plugins/axios";
import { toast } from "react-toastify";
import { errorToast, successToast } from "../components/common/toast";

export default function PaymentForm() {
  const [formData, setFormData] = React.useState({
    first_name: "Test",
    last_name: "Bahadur",
    email: "rhishiva.kandel@gmail.com",
    phone: "9851993439",
    pan: "293203420423",
    amount: "11"
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    authAxios
      .post("/users/", formData)
      .then((res) => {
        toast(res?.data?.message, successToast);
      })
      .catch((err) => {
        console.log(err);
        toast("Couldn't create user", errorToast);
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4 px-10">
      <Card.Body>
        <h5 className="mb-4">User Payment Information</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>First Name (*)</Form.Label>
                <Form.Control
                  required
                  onChange={handleChange}
                  name="first_name"
                  type="text"
                  value={formData.first_name}
                  placeholder="Enter first name"
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  required
                  onChange={handleChange}
                  name="middle_name"
                  type="text"
                  placeholder="Middle Name (If any)"
                  value={formData.middle_name}
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Last Name (*)</Form.Label>
                <Form.Control
                  required
                  name="last_name"
                  onChange={handleChange}
                  type="text"
                  value={formData.last_name}
                  placeholder="Enter last name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  value={formData.email}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  placeholder="9800000000"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Pan Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                  placeholder="PAN number of citizen whose tax it to be paid"
                />
              </Form.Group>
            </Col>

          </Row>
          <h5 className="my-4">Khalti Payment Form</h5>
          <Row>
            <Col sm={6} className="mb-3">
              <Form.Group>
                <Form.Label>Khalti I.D.</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value="9800000000"
                  placeholder="Your Khalti I.D."
                />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control required type="text" value={formData.amount} placeholder="Your Amount" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">
              Pay
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
