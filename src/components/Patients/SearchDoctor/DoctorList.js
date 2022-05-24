import React, { useEffect, useState } from "react";
import DoctorBooking from "../Bookings/DoctorBooking";
import DoctorsList from "../../../pages/Patient/DoctorsList";
const doc_details = [
  {
    name: "Badar baig",
    description: "MDS - Periodontology and Oral Implantology, BDS",
    category: "Dentist",
    rating: 4,
    no_of_ratings:17,
    location: "Florida, USA",
    subCategory: ["Dental Filings", "Whitining"],
    Likes: "98%",
    chargesRange: "$300 - $1000 ",
    img:"assets/img/doctors/badar.jpg"
  },
  {
    name: "Raheel saleem",
    description: "All specialist",
    category: "Bones",
    rating: 3,
    no_of_ratings:15,
    location: "yateem khana, USA",
    subCategory: ["Dental Filings", "Whitining"],
    Likes: "50%",
    chargesRange: "$100 - $150 ",
    img:"assets/img/doctors/doctor-thumb-02.jpg"
  },
  {
    name: "Molecule",
    description: "All specialist",
    category: "Bones",
    rating: 1,
    no_of_ratings:15,
    location: "yateem khana, USA",
    subCategory: ["Dental Filings", "Whitining"],
    Likes: "50%",
    chargesRange: "$100 - $150 ",
    img:"assets/img/doctors/doctor-thumb-01.jpg"
  },
  {
    name: "Molecule",
    description: "All specialist",
    category: "Bones",
    rating: 1,
    no_of_ratings:15,
    location: "yateem khana, USA",
    subCategory: ["Dental Filings", "Whitining"],
    Likes: "50%",
    chargesRange: "$100 - $150 ",
    img:"assets/img/doctors/doctor-thumb-01.jpg"
  }
];
export default function DoctorList() {
  const [docDetails, setDocDetails] = useState(doc_details);

  useEffect(() => {
    
    // setDocDetails(doc_details);
  }, []);

  return (
    <div className="col-md-12 col-lg-8 col-xl-9">
<<<<<<< HEAD
      {docDetails.map((docData, index) => {
        return (
          <div className="card">
            <div className="card-body">
              <div className="doctor-widget">
                <div className="doc-info-left">
                  <div className="doctor-img">
                    <a href="doctor-profile.html">
                      <img
                        src={docData.img}
                        className="img-fluid"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name">
                      <a href="doctor-profile.html">{docData.name}</a>
                    </h4>
                    <p className="doc-speciality">
                      {docData.description}
                    </p>
                    <h5 className="doc-department">
                      <img
                        src="assets/img/specialities/specialities-05.png"
                        className="img-fluid"
                        alt="Speciality"
                      />
                      {docData.category}
                    </h5>
                    <div className="rating">
                      {
                        [...Array(docData.rating)].map(()=>{
                          return(
                            <i className="fas fa-star filled"></i>
                          );
                        })
                      }
                      {/* <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star"></i> */}
                      <span className="d-inline-block average-rating">
                        ({docData.no_of_ratings})
                      </span>
                    </div>
                    <div className="clinic-details">
                      <p className="doc-location">
                        <i className="fas fa-map-marker-alt"></i> {docData.location}
                      </p>
                      <ul className="clinic-gallery">
                        <li>
                          <a
                            href="assets/img/features/feature-01.jpg"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/img/features/feature-01.jpg"
                              alt="Feature"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="assets/img/features/feature-02.jpg"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/img/features/feature-02.jpg"
                              alt="Feature"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="assets/img/features/feature-03.jpg"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/img/features/feature-03.jpg"
                              alt="Feature"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="assets/img/features/feature-04.jpg"
                            data-fancybox="gallery"
                          >
                            <img
                              src="assets/img/features/feature-04.jpg"
                              alt="Feature"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="clinic-services">
                      {docData.subCategory.map((subCategory)=>{
                        <span>{subCategory}</span>
                      })}
                    </div>
                  </div>
                </div>
                <div className="doc-info-right">
                  <div className="clini-infos">
                    <ul>
                      <li>
                        <i className="far fa-thumbs-up"></i> {docData.Likes}
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i> {docData.location}
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt"></i> {docData.chargesRange}
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        ></i>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="clinic-booking">
                    <a className="view-pro-btn" href="doctor-profile.html">
                      View Profile
                    </a>
                    <a className="apt-btn" onClick={()=>{
                      appointment()
                    }}>
                      Book Appointment
                    </a>
                    {newComponent ?<DoctorBooking/>:null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
=======
    {
      docDetails.map((docData, index) => {
        return(
          <DoctorsList docData={docData}/>
        )
      }
      )
    }
>>>>>>> a756445ba8736c1a238f9fcd19468d88d2f3e53e
    </div>
  );
}
