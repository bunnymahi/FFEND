import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Home/Navbar";
// import Tg from "./TG/Tg";
import Udata from "./User/Udata";
import TA from "./Auth/TA";
import Tg from "./TG/Tg";
import Feedback from "./Home/Feedback";
import About from "./Home/About";
import ContactUs from "./Home/ContacUs";
import HomePage from "./Home/HomePage";
import Home from "./Home/Home";
import Dealer from "./Dealer/Dealer";
import Icheck from "./Instant/Icheck";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<TA/>}/>
        <Route path="/tollplaza" element={<Tg/>}/>
        <Route path="/User-data" element={<Udata/>}/>
        <Route path="/Udata" element={<Udata/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/Homepage" element={<HomePage/>}/>
        <Route path="/Dealer" element={<Dealer/>}/>
        <Route path="/CheckupNow" element={<Icheck/>}/>
      </Routes>
    </Router>
  );
}

export default App;
