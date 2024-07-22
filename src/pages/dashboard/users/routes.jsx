import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from ".";
import UserRegistrationForm from './Register';
import UserUpdateForm from './Update';

export default function DashboardRoutes() {
  return (
    <Routes>
        <Route exact path={"/"} element={<Users />} />
        <Route exact path={"/register"} element={<UserRegistrationForm />} />
        <Route exact path={"/update/:id"} element={<UserUpdateForm />} />
    </Routes>
  );
}
