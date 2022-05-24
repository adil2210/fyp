import React from "react";
import SideBar from "../SideBar";
import Widgets from "./Widgets";
import PatientAppointments from "./PatientAppointments";
import BreadCrumBar from "../../BreadCrumBar";
export default function Dashboard() {
  return (
    <>
    <Widgets/>
    <PatientAppointments/>
    </>
  );
}

