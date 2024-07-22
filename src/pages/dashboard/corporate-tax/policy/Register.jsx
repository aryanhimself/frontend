import React from "react";

import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import { authAxios } from "../../../../plugins/axios";
import { toast } from "react-toastify";
import { errorToast, successToast } from "../../../../components/common/toast";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CorporateTaxPolicyRegistration() {
  const [formData, setFormData] = React.useState({
    married: {},
    unmarried: {},
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    authAxios
      .post("/corporate-tax/policy/", formData)
      .then((res) => {
        toast(res?.data?.message, successToast);
      })
      .catch((err) => {
        console.log(err);
        toast("Couldn't create policy", errorToast);
      });
  };

  const handleChange = (event) => {
    // setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Corporate Tax Policy Information</h5>
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Fiscal Year (*)</Form.Label>
                <Form.Select onChange={handleChange} name="fiscal_year">
                  <option value="1">2079/80</option>
                  <option value="2">2080/81</option>
                  <option value="3">2081/82</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <h5>Married Policy</h5>
          {Object.keys(formData?.married).map((item) => (
            <Row>
              <Col md={5} className="mb-3">
                <Form.Group>
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={5} className="mb-3">
                <Form.Group>
                  <Form.Label>Tax Percent (%)</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col className="mt-4">
                <Button
                  variant="outline-gray-900"
                  onClick={(event) => {
                    setFormData({
                      ...formData,
                      married: {
                        ...formData.married,
                        [Object.keys(formData.married).length.toString() + 1]: {
                          amount: 0,
                          percent: 0,
                        },
                      },
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
              </Col>
            </Row>
          ))}
          <Row>
            <Col>
              <Button
                variant="outline-gray-900"
                onClick={(event) => {
                  console.log(formData);
                  setFormData({
                    ...formData,
                    married: {
                      ...formData.married,
                      [Object.keys(formData.married).length.toString() + 1]: {
                        amount: 0,
                        percent: 0,
                      },
                    },
                  });
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
