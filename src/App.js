import "react-toastify/dist/ReactToastify.css";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/Login";
import Registerform from "./components/Register";

import { ToastContainer } from "react-toastify";
import UserInfoProvider, { useUserInfo } from "./context/UserInfo";
import DashboardRoutes from "./pages/DashboardRoutes";
// import BusinessPage from './components/BusinessPage';
import Home from './pages/Home';
import "react-datetime/css/react-datetime.css";

function PrivateRoutes() {
  const userInfo = useUserInfo();
  return (
    userInfo?.id && (
      <Routes>
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    )
  );
}

function App() {
  const [go, setGo] = React.useState(localStorage.getItem("go") === "true");
  React.useEffect(() => {
    setGo((localStorage.getItem("go") || "").toLowerCase() === "true");
  }, []);
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/auth/signup" element={<Registerform />} />
        <Route exact path="/" element={<Home />} />
        <Route
          path="/dashboard/*"
          element={
            go ? (
              <UserInfoProvider>
                <PrivateRoutes />
              </UserInfoProvider>
            ) : (
              <Navigate to="/auth/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
