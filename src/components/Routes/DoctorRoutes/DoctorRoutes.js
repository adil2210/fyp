import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DoctorLayout from '../../../Layout/DoctorLayout'
import Layout from '../../../Layout/Layout';
import Dashboard from '../../Doctors/dashboard/Dashboard';
import DoctorProfile from '../../Doctors/DoctorProfile/DoctorProfileSettings';
export default function DoctorRoutes() {
// const [breadCrumBar, setBreadCrumBar] = useState({name:'dashboard', title:'dashboard', main:'home'})
// const DoSomethingWrapper = (props) => {
//     useEffect(() => {
//         setBreadCrumBar({name: props.name, title:props.title, main:props.main})
//     },[])
//     return props.children;
//   };

  return (
    <DoctorLayout>
        <Route exact path="/doctor-dashboard">
                <Dashboard />
        </Route>
        <Route exact path="/doctor-profile">
                <DoctorProfile />
        </Route>
    </DoctorLayout>
     
  )
}
