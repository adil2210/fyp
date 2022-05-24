import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../Navbar";
import Login from "../Login";
import Home_main from "../Home/Home-main";
import SearchDoctor from "../Patients/SearchDoctor/Search-doctor";
import DoctorBooking from "../Patients/Bookings/DoctorBooking";
import Footer from "../Footer";
import Layout from "../../Layout/Layout";
import Dashboard from "../Doctors/dashboard/Dashboard";
import BreadCrumBar from "../BreadCrumBar";
import DoctorProfileSettings from "../Doctors/DoctorProfile/DoctorProfileSettings";
import PatientRoutes from "./PatientRoutes/PatientRoutes";
import DoctorRoutes from "./DoctorRoutes/DoctorRoutes";
export default function RoutesPath() {
  // const loc = useLocation();
  const user = "patient";

  return (
    <Router>
      <Switch>
        <Layout>
          <PatientRoutes />
          <DoctorRoutes />
        </Layout>
      </Switch>
    </Router>
  );
}
{
  /* <Navbar/>
            <DoctorBooking/>
            <Footer/> */
}
{
  /* <Login /> */
}
