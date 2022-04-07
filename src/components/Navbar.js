import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
        <>
      <Router>
      <header className="header">
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
                <Link to="#" className="navbar-brand logo">
                  <img
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to="index.html" className="menu-logo">
                    <img
                      src="assets/img/logo.png"
                      className="img-fluid"
                      alt="Logo"
                    />
                  </Link>
                  <Link
                    id="menu_close"
                    className="menu-close"
                    to="javascript:void(0);"
                  >
                    <i className="fas fa-times"></i>
                  </Link>
                </div>
                <ul className="main-nav">
                  <li>
                    <Link to="home">
                      Home 
                    </Link>
                  </li>
                  <li className="has-submenu ">
                    <Link to="#">
                      Doctors <i className="fas fa-chevron-down"></i>
                    </Link>
                      <ul className="submenu">
                      <li className=""><Link to="/doctor-dashboard">Dashboard</Link></li>
                      </ul>
                  </li>
                  <li className="has-submenu ">
                     <Link to="#">
                      Patients <i className="fas fa-chevron-down"></i>
                      </Link>
                      <ul className="submenu">
                      <li className=""><Link to="/search_doctor">Search Doctor</Link></li>
                      </ul>
                  </li>
                  <li className="has-submenu ">
                    <Link to="#">
                      Pharmacy <i className="fas fa-chevron-down"></i>
                    </Link>
                  </li>
                  <li className="has-submenu active">
                    <Link to="#">
                      Pages <i className="fas fa-chevron-down"></i>
                    </Link>
                  </li>
                  <li className="has-submenu ">
                    <Link to="#">
                      Blog <i className="fas fa-chevron-down"></i>
                    </Link>
                  </li>
                  <li className="has-submenu">
                    <Link to="#" target="_blank">
                      Admin <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to="admin/index_admin.html" target="_blank">
                          Admin
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="pharmacy-admin/index_pharmacy_admin.html"
                          target="_blank"
                        >
                          Pharmacy Admin
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <ul className="nav header-navbar-rht">
                <li className="nav-item contact-item">
                  <div className="header-contact-img">
                    <i className="far fa-hospital"></i>
                  </div>
                  <div className="header-contact-detail">
                    <p className="contact-header">Contact</p>
                    <p className="contact-info-header"> +1 315 369 5943</p>
                  </div>
                  <li className="nav-item">
                    <Link className="nav-link header-login" to="login.html">
                      login / Signup{" "}
                    </Link>
                  </li>
                </li>
              </ul>
            </nav>
          </header>
      </Router>
      </>
    </div>
    
  );
};
