import React from "react";
import { Route, Routes } from "react-router-dom";


import VehicleTaxPolicyRegistration from './Register';
import VehicleTaxPolicyUpdateForm from './Update';
import VehicleTaxPolicy from './VehicleTaxPolicies';


export default function VehicleTaxPolicyRoutes() {
  console.log("Warning");
  return (
    <Routes>
        <Route exact path={"/"} element={<VehicleTaxPolicy />} />
        <Route exact path={"/register"} element={<VehicleTaxPolicyRegistration />} />
        <Route exact path={"/update/:id"} element={<VehicleTaxPolicyUpdateForm />} />
    </Routes>
  );
}
