import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import Login from "./Login";
import Home_main from "./Home/Home-main";
import SearchDoctor from "./Patients/SearchDoctor/Search-doctor";
import DoctorBooking from "./Patients/Bookings/DoctorBooking";
import Footer from "./Footer";
export default function RoutesPath() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar/>
            <DoctorBooking/>
            <Footer/>
            {/* <Login /> */}
          </Route>
          
          <Route path="/home">
            <Home_main/>
          </Route>

          <Route path="/search_doctor">
            <Navbar/>
            <SearchDoctor/>
          </Route>


        </Switch>
      </Router>
  );
}
