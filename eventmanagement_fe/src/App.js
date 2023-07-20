import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Myprofile from "./pages/Myprofile";
import MyTickets from "./pages/MyTickets";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./containers/Auth/Login/Login";
import Signup from "./containers/Auth/Signup/Signup";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Myprofile" element={<Myprofile />} />
          <Route path="/MyTickets" element={<MyTickets />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
