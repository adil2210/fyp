import React from "react";
import PatientAppointment from "../../../pages/Appointment/PatientAppointment";
export default function PatientCard(props) {
  return (
    <div>
      {props.appointmentList.map((patient) => {
        return <PatientAppointment name={patient.name} />;
      })}
    </div>
  );
}
