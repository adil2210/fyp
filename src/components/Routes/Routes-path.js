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
<<<<<<< HEAD
import PatientAppointments from "../Doctors/dashboard/PatientAppointments";
import Appointment from "../Doctors/Appointments/Appointment";
=======
import DoctorRoutes from "./DoctorRoutes/DoctorRoutes";
import PatientRoutes from "./PatientRoutes/PatientRoutes";
>>>>>>> a756445ba8736c1a238f9fcd19468d88d2f3e53e
export default function RoutesPath() {
  // const loc = useLocation();
  const user = 'patient'

  return (
    <Router>
      <Switch>
        <Layout>
<<<<<<< HEAD
          <Route exact path="/doctor-dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/home">
            <Home_main />
            {/* <Login/ > */}
          </Route>

          <Route path="/search_doctor">
            <SearchDoctor />
          </Route>
          <Route exact path="/doctor-profile">
            <DoctorProfileSettings />
          </Route>
          <Route exact path="/pending-appointments">
            <Appointment />
          </Route>
=======
          {
            user === 'patient' ? <PatientRoutes/> : <DoctorRoutes/>
          }
>>>>>>> a756445ba8736c1a238f9fcd19468d88d2f3e53e
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
