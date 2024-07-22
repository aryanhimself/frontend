import React from "react";
import moment from "moment";
import {
  Row,
  Col,
  Card,
} from "@themesberg/react-bootstrap";


export default function Footer(props) {
  const currentYear = moment().get("year");

  return (
    <div>
      <footer className="footer section py-3">
        <Row>
          <Col xs={12} lg={6} className="mb-2 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © 2024-{`${currentYear+1} `}
              <Card.Link
                href="https://themesberg.com"
                target="_blank"
                className="text-blue text-decoration-none fw-normal"
              >
                Rhishiva Kandel
              </Card.Link>
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
