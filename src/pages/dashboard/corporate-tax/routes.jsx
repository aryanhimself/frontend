import React from "react";
import { Route, Routes } from "react-router-dom";

import CorporateTaxPolicyRoutes from './policy/routes';
import CorporateTaxRecordsRoutes from './records/routes';

export default function CorporateTaxRoutes() {
  return (
    <Routes>
        <Route path={"/policy/*"} element={<CorporateTaxPolicyRoutes />} />
        <Route path={"/records/*"} element={<CorporateTaxRecordsRoutes />} />
    </Routes>
  );
}
