import React from "react";
import BreadCrumBar from "../components/BreadCrumBar";
import SideBar from "../components/Doctors/SideBar";

export default function DoctorLayout(props) {
  return (
    <div>
      <BreadCrumBar name={props.name} main={props.main} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <div className="col-md-7 col-lg-8 col-xl-9">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
