import React from "react";
import SideBar from "../dashboard/SideBar";
import BreadCrumBar from "../../BreadCrumBar";
import PatientCard from "./PatientCard";
export default function Appointment() {
  const patList = [
    {
      name: "Adil",
    },
  ];
  return (
    <div>
      <BreadCrumBar name="Pending Appointments" main="home" />,
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <div className="col-md-7 col-lg-8 col-xl-9">
              <PatientCard appointmentList={patList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
