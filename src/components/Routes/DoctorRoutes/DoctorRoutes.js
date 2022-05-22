import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DoctorLayout from '../../../Layout/DoctorLayout'
import Layout from '../../../Layout/Layout';
import Dashboard from '../../Doctors/dashboard/Dashboard';
import DoctorProfile from '../../Doctors/DoctorProfile/DoctorProfileSettings';
export default function DoctorRoutes() {
const [breadCrumBar, setBreadCrumBar] = useState({name:'dashboard', title:'dashboard', main:'home'})
const DoSomethingWrapper = (props) => {
    useEffect(() => {
        setBreadCrumBar({name: props.name, title:props.title, main:props.main})
    },[])
    return props.children;
  };

  return (
    <DoctorLayout name={breadCrumBar.name} main={breadCrumBar.main}>
        <Route exact path="/doctor-dashboard">
            <DoSomethingWrapper name='dashboard' title='dashboard' main='home'>
                <Dashboard />
            </DoSomethingWrapper>
        </Route>
        <Route exact path="/doctor-profile">
            <DoSomethingWrapper name='doctor profile' title='doctor profile' main='home'>
                <DoctorProfile />
            </DoSomethingWrapper>
        </Route>
    </DoctorLayout>
     
  )
}
