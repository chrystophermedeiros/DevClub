import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './assets/containers/Home'
import Users from './assets/containers/Users'

function Routess() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuarios" element={<Users/>}/>
            </Routes>
        </Router>

    )

}

export default Routess