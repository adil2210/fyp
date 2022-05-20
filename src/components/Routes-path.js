import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Navbar } from "./Navbar";
import Login from "./Login";
import Home_main from "./Home/Home-main";
import SearchDoctor from "./Patients/SearchDoctor/Search-doctor";
import DoctorBooking from "./Patients/Bookings/DoctorBooking";
import Footer from "./Footer";
import Layout from "../Layout/Layout";
import Dashboard from "./Doctors/dashboard/Dashboard";
import BreadCrumBar from "./BreadCrumBar";
export default function RoutesPath() {
  // const loc = useLocation();

  return (
    <Router>
        <Switch>
          <Layout>

          <Route exact path="/doctor-dashboard">
            <BreadCrumBar name='Dasboard' main='home'/>
            <Dashboard/>            
          </Route>
          <Route exact path="/home">
            <Home_main/>
          </Route>

          <Route path="/search_doctor">
            <SearchDoctor/>
          </Route>

          </Layout>
        </Switch>
      </Router>
  );
}
 {/* <Navbar/>
            <DoctorBooking/>
            <Footer/> */}
            {/* <Login /> */}