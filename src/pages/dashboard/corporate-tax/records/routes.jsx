import React from "react";
import { Route, Routes } from "react-router-dom";


import CorporateTaxPolicyRegistration from './Register';
import CorporateTaxPolicyUpdateForm from './Update';
import CorporateTaxPolicy from './CorporateTaxRecords';


export default function IncomeTaxPolicyRoutes() {
  return (
    <Routes>
        <Route exact path={"/"} element={<CorporateTaxPolicy />} />
        <Route exact path={"/register"} element={<CorporateTaxPolicyRegistration />} />
        <Route exact path={"/update/:id"} element={<CorporateTaxPolicyUpdateForm />} />
    </Routes>
  );
}
