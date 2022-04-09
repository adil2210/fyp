import React from "react";
import SideBar from "./SideBar";
import Widgets from "./Widgets";
import PatientAppointments from "./PatientAppointments";
export default function Dashboard() {
  return (
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <SideBar/>
          <div class="col-md-7 col-lg-8 col-xl-9">
            <Widgets/>
            <PatientAppointments/>

          </div>

          
        </div>
      </div>
    </div>
  );
}
