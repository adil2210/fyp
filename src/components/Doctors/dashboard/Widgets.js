import React from "react";
import WidgetsBar from "../../../pages/DoctorDashboard/WidgetsBar";

export default function Widgets() {
  const doc_data = {
    total_p: 1500,
    today_p: 150,
    appointment: 80
  }
  
  return (
    <WidgetsBar doctorRec = {doc_data}/>
  );
}
