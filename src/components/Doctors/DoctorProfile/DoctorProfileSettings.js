import React from "react";
import SideBar from "../dashboard/SideBar";
import BreadCrumBar from "../../BreadCrumBar";
import BasicInformation from "./BasicInformation";
import AboutMe from "./AboutMe";
import ContactInfo from "./ContactInfo";
import Pricing from "./Pricing";
import Specialization from "./Specialization";
import Education from "./Education";
import Experience from "./Experience";
export default function Dashboard() {
  const m = {
    marginBottom: "10px",
  };
  return (
    <div>
      <BreadCrumBar name="Profile Setting" main="home" />,
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <div className="col-md-7 col-lg-8 col-xl-9">
              <BasicInformation />
              <AboutMe />
              <ContactInfo />
              <Pricing />
              <Specialization />
              <Education />
              <Experience />
              <button
                className="submit-section submit-btn-bottom btn btn-primary submit-btn"
                type="submit"
                style={m}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
