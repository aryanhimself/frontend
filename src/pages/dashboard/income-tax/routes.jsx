import React from "react";
import { Route, Routes } from "react-router-dom";

import IncomeTaxPolicyRoutes from './policy/routes';
import IncomeTaxRecordsRoutes from './records/routes';

export default function IncomeTaxRoutes() {
  return (
    <Routes>
        <Route path={"/policy/*"} element={<IncomeTaxPolicyRoutes />} />
        <Route path={"/records/*"} element={<IncomeTaxRecordsRoutes />} />
    </Routes>
  );
}
