import './App.css';

import { Fragment } from "react";
import Home from "./Components/Pages/Home";
import { Route,Routes } from "react-router-dom";
import FAQ from "./Components/Pages/FAQ";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import EmiCalculator from "./Components/Pages/EmiCalculator";
import CustomerSupport from "./Components/Pages/CustomerSupport";


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="natwestlogo" element={<Home/>}/>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="faq" element={<FAQ/>}/>
        <Route path="emiCalculator" element={<EmiCalculator/>}/>
        <Route path="customerSupport" element={<CustomerSupport/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<div className="text-center text-danger">Page Not Found!!</div>} />
      </Routes>
    </Fragment>
  );
}

export default App;
