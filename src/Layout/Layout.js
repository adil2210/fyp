import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumBar from "../components/BreadCrumBar"
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
