import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "@themesberg/react-bootstrap";

import IncomeTaxRecordsTable from "./Table";

export default function IncomeTaxPolicy() {
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
            <Breadcrumb.Item>Income Tax</Breadcrumb.Item>
            <Breadcrumb.Item active>Records</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Income Tax Records</h4>
        </div>
      </div>
      <IncomeTaxRecordsTable />
    </>
  );
}
