// // // import EHR from "./pages/EhrPage/Upload";
// // // import DoctorEHR from "./pages/EhrPage/DoctorEHR";
// // // import Login from "./pages/Login"
// // import { BrowserRouter, Routes,Route, Switch } from 'react-router-dom';




// // export default function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" component={ColorSchemesExample} />
// //     </Routes>
// //     // </EthProvider>

// //   );
// // }



import { EthProvider } from "./contexts/EthContext";

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from 'react-router-dom';
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
      <Router>
        <EthProvider>
          {/* <Routes>
            <Route exact path='/' element={< Login />} />
            <Route exact path='login' Component={< Login />} />
            <Route exact path='/contact' element={< Navbr />} />
            <Route path='*' element={<h1>Hello</h1>} />
          </Routes>
        </EthProvider> */}
      
      {/* <EthProvider> */}
      <Switch>
        <Route path ="/" component = {Home} />
        <Route path ="/login" component = {Login} />
    </Switch>
      </EthProvider>
      </Router>
      </>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Patientehr from './pages/ehrPatient';
// // import Contact from './component/contact';
// // import './App.css';

// class App extends Component {
// render() {
// 	return (
//     <EthProvider>
//     <Router>
//     <Navbr />
// 		<div className="App">
// 			<ul className="App-header">
// 			<li>
// 				<Link to="/">Home</Link>
// 			</li>
// 			<li>
// 				<Link to="/login">Login</Link>
// 			</li>
// 			<li>
// 				<Link to="/contact">Contact Us</Link>
// 			</li>
// 			</ul>
// 		<Routes>
// 				<Route exact path='/' element={< Home />}></Route>
// 				<Route exact path='/login' element={< Login />}></Route>
// 				<Route exact path='/contact' element={< Login />}></Route>
// 		</Routes>
// 		</div>
// 	</Router>
//     </EthProvider>
	
// );
// }
// }

// export default App;

