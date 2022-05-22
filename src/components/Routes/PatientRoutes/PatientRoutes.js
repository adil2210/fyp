import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchDoctor from '../../Patients/SearchDoctor/Search-doctor';
export default function PatientRoutes() {
    const [breadCrumBar, setBreadCrumBar] = useState({name:'dashboard', title:'dashboard', main:'home'})
    const DoSomethingWrapper = (props) => {
        useEffect(() => {
            setBreadCrumBar({name: props.name, title:props.title, main:props.main})
        },[])
        return props.children;
    };
  return (
    <Route exact path="/search-doc">
        <DoSomethingWrapper name='Search' title='Many doctors here' main='home'>
            <SearchDoctor />
        </DoSomethingWrapper>
    </Route>
  )
}
