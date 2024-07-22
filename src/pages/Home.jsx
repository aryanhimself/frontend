import React, { useState } from "react";
import { Col, Row, Form, Button, Modal } from "@themesberg/react-bootstrap";
import { authAxios } from "../plugins/axios";

export default function Home() {
  const [showDefault, setShowDefault] = useState(false);
  const [amount, setAmount] = useState(0);
  const [isGenerated, setIsGenerated] = useState(false);
  const [data, setData] = useState({
    pan: "",
  });
  const handleClose = () => setShowDefault(false);
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleIncomeTaxSubmit = (event) => {
    event.preventDefault();
    authAxios
      .post("/income-tax/record/", {
        pan: data.pan,
      })
      .then((res) => {
        setIsGenerated(true);
        setAmount(res.data.data.amount)
      })
      .catch((err) => {});
  };
  const handlePayment = (event) => {
    
  };
  return (
    <div>
      <h1>Taxes</h1>

      <React.Fragment>
        <Button
          variant="primary"
          className="my-3 mx-5"
          onClick={() => setShowDefault(true)}
          style={{
            height: "200px",
            width: "200px",
          }}
        >
          Income Tax
        </Button>

        <Button
          variant="primary"
          className="my-3 mx-5"
          onClick={() => setShowDefault(true)}
          style={{
            height: "200px",
            width: "200px",
          }}
        >
          Corporate Tax
        </Button>
        <Button
          variant="primary"
          className="my-3 mx-5"
          onClick={() => setShowDefault(true)}
          style={{
            height: "200px",
            width: "200px",
          }}
        >
          Vehicle Tax
        </Button>

        <Modal
          as={Modal.Dialog}
          centered
          show={showDefault}
          onHide={handleClose}
        >
          <Modal.Header>
            <Modal.Title className="h6">Income Tax</Modal.Title>
            <Button variant="close" aria-label="Close" onClick={handleClose} />
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group>
                    <Form.Label>Individual PAN(*)</Form.Label>
                    <Form.Control
                      required
                      onChange={handleChange}
                      name="pan"
                      type="text"
                      placeholder="PAN Number"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h3>Amount: {amount}</h3> 
              <div className="mt-3">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleIncomeTaxSubmit}
                >
                  Generate
                </Button>
                {isGenerated && (
                  <Button variant="primary" onSubmit={handlePayment}>
                    Pay
                  </Button>
                )}
                <Button
                  variant="link"
                  className="text-gray ms-auto"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
}
