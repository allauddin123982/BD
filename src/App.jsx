import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
import Eligibility from "./Pages/Eligibility";
import DonateBlood from "./Pages/DonateBlood";
import DonationForCancer from "./Pages/DonationForCancer";
import NavBar from "./Components/Home/NavBar";
import Home from "./Pages/Home";
import Purchase from "./Pages/Pucrhase";
function App() {
  return (
    <>
    <Router>
    <NavBar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/el" element={<Eligibility />} />
        <Route path="/DonateBlood" element={<DonateBlood/>} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/DonateForCancer" element={<DonationForCancer/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
