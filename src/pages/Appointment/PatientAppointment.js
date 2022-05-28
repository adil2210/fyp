import React from "react";

export default function PatientAppointment(props) {
  return (
    <div className="appointments">
      <div className="appointment-list">
        <div className="profile-info-widget">
          <a href="patient-profile.html" className="booking-doc-img">
            <img src="assets/img/patients/patient.jpg" alt="User Image" />
          </a>
          <div className="profile-det-info">
            <h3>
              <a href="patient-profile.html"> {props.name}</a>
            </h3>
            <div className="patient-details">
              <h5>
                <i className="far fa-clock"></i> 14 Nov 2019, 10.00 AM
              </h5>
              <h5>
                <i className="fas fa-map-marker-alt"></i> Newyork, United States
              </h5>
              <h5>
                <i className="fas fa-envelope"></i>{" "}
                <a
                  href="https://doccure-laravel.dreamguystech.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="22504b414a43504662475a434f524e470c414d4f"
                >
                  [email&#160;protected]
                </a>
              </h5>
              <h5 className="mb-0">
                <i className="fas fa-phone"></i> +1 923 782 4575
              </h5>
            </div>
          </div>
        </div>
        <div className="appointment-action">
          <a
            href="#"
            className="btn btn-sm bg-info-light"
            data-toggle="modal"
            data-target="#appt_details"
          >
            <i className="far fa-eye"></i> View
          </a>
          <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
            <i className="fas fa-check"></i> Accept
          </a>
          <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
            <i className="fas fa-times"></i> Cancel
          </a>
        </div>
      </div>
    </div>
  );
}
