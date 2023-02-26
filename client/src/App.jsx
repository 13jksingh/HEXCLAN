import { EthProvider } from "./contexts/EthContext";

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navbr from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EhrDoctor from "./pages/ehrDoctor";
import Patientehr from "./pages/ehrPatient";
import DoctorEHR from "./pages/EhrPage/DoctorEHR";

class App extends Component {
  render() {
    return (
      <>
        <Navbr />
      <Router>
        <EthProvider>
        <Routes>
              <Route exact path="/login" element={<Login />}></Route>
              {/* <Route exact path="/" element={<EhrDoctor />}></Route> */}
              {/* <Route exact path="/" element={<Login />}></Route> */}
              <Route exact path="/" element={<Patientehr />}></Route>

              <Route exact path="/signup" element={<Patientehr />} ></Route>
            </Routes>
      </EthProvider>
      </Router>
      </>
    );
  }
}

export default App;