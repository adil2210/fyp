import React from "react";
import SideBar from "./SideBar";
import Widgets from "./Widgets";
import PatientAppointments from "./PatientAppointments";
import BreadCrumBar from "../../BreadCrumBar";
export default function Dashboard() {
  return (
    <BreadCrumBar name='Dasboard' main='home'/>,
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <SideBar/>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <Widgets/>
            <PatientAppointments/>
          </div>
        </div>
      </div>
    </div>
  );
}
