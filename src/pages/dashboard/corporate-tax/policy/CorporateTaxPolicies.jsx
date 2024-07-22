import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "@themesberg/react-bootstrap";

import IncomeTaxPolicyTable from "./Table";

export default function CorporateTaxPolicy() {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Corporate Tax</Breadcrumb.Item>
            <Breadcrumb.Item active>Policies</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Corporate Tax Policies</h4>
        </div>
      </div>
      <IncomeTaxPolicyTable />
    </>
  );
}
