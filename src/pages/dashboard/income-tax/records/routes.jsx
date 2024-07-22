import React from "react";
import { Route, Routes } from "react-router-dom";


import IncomeTaxPolicyRegistration from './Register';
import IncomeTaxPolicyUpdateForm from './Update';
import IncomeTaxPolicy from './IncomeTaxRecords';


export default function IncomeTaxRecordRoutes() {
  return (
    <Routes>
        <Route exact path={"/"} element={<IncomeTaxPolicy />} />
        <Route path={"/register"} element={<IncomeTaxPolicyRegistration />} />
        <Route exact path={"/update/:id"} element={<IncomeTaxPolicyUpdateForm />} />
    </Routes>
  );
}
