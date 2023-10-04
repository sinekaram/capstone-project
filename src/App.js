import './App.css';
import Home from "./Components/Pages/Home";
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import FAQ from "./Components/Pages/FAQ";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import EmiCalculator from "./Components/Pages/EmiCalculator";
import CustomerSupport from "./Components/Pages/CustomerSupport";
import LoanApplicationForm from './Components/Pages/LoanApplicationForm';
import LoanHistory from './Components/Pages/LoanHistory';
 
function App() {  
  return (
    <div>
    <Router>
      <Routes>
        <Route path="natwestlogo" element={<Home/>}/>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="faq" element={<FAQ/>}/>
        <Route path="/apply-for-loan" element={<LoanApplicationForm />} />
        <Route path="/loan-history" element={<LoanHistory />} />
        <Route path="/emi-calculator" element={<EmiCalculator/>}/>
        <Route path="customerSupport" element={<CustomerSupport/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<div className="text-center text-danger">Page Not Found!!</div>} />
      </Routes>
    </Router>
    </div> 
  );
}

export default App;
