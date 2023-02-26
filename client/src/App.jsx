// // import EHR from "./pages/EhrPage/Upload";
// // import DoctorEHR from "./pages/EhrPage/DoctorEHR";
// // import Login from "./pages/Login"
// import { BrowserRouter, Routes,Route, Switch } from 'react-router-dom';




// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" component={ColorSchemesExample} />
//     </Routes>
//     // </EthProvider>

//   );
// }



import { EthProvider } from "./contexts/EthContext";

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbr from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EhrDoctor from "./pages/ehrDoctor";
import Patientehr from "./pages/ehrPatient";

class App extends Component {
  render() {
    return (
      <>
        <Navbr />
      {/* <Router>
        <EthProvider>
          <Routes>
            <Route exact path='/' element={< Login />} />
            <Route exact path='login' Component={< Login />} />
            <Route exact path='/contact' element={< Navbr />} />
            <Route path='*' element={<h1>Hello</h1>} />
          </Routes>
        </EthProvider>
      </Router> */}
      <EthProvider>
        <BrowserRouter basename={'/'}>
          <Routes>
            <Route path='/login' element={<Login />}>
              {/* <Route path='login' element={<Login />} /> */}
            </Route>
            <Route path="/" element={<Patientehr />}>
              {/* <Route path='' element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </EthProvider>
      </>
    );
  }
}

export default App;
