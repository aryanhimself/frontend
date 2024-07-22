import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "./dashboard";
import Transactions from "./Transactions";
import Settings from "./Settings";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import UserRoutes from "./dashboard/users/routes";
import IncomeTaxRoutes from "./dashboard/income-tax/routes";
import VehicleTaxRoutes from "./dashboard/vehicle-tax/routes";
import CorporateTaxRoutes from "./dashboard/corporate-tax/routes";


export default function DashboardRoutes() {
  return (
    <Routes>
      <Route
        element={
          <>
            <Preloader show={false} />
            <Sidebar />
            <main className="content">
              <Navbar />
              <Outlet />
              <Footer toggleSettings={true} showSettings={true} />
            </main>
          </>
        }
      >
        <Route exact path={"/"} element={<Dashboard />} />
        <Route exact path={"/transactions"} element={<Transactions />} />
        <Route path={"/users/*"} element={<UserRoutes />} />
        <Route path={"/income-tax/*"} element={<IncomeTaxRoutes />} />
        <Route path={"/corporate-tax/*"} element={<CorporateTaxRoutes />} />
        <Route path={"/vehicle-tax/*"} element={<VehicleTaxRoutes />} />
        <Route exact path={"/settings"} element={<Settings />} />
      </Route>
    </Routes>
  );
}
