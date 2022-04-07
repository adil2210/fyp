import React from "react";
import { Navbar } from "../Navbar";
import SearchSection from "./Search-section";
import HomeTileSection from "./Home-tile-section";
import HomeSpecialities from "./Home-specialities";
import Features from "./Features";
import SearchFilter from "../Patients/SearchDoctor/SearchFilter";
import DoctorList from "../Patients/SearchDoctor/DoctorList";

export default function Home_main() {
  return (
    <div className="main-wrapper">
      <SearchSection />
      <HomeTileSection />
      <Features />
    </div>
  );
}
