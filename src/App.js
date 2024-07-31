import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Sidebar from "./Components/Layout/Sidebar";
import Navbar from "./Components/Layout/Navbar";
import { user } from "./Utils/data";
function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar name={user.name} />
        <div className="ml-[80px] w-full p-4 ">
          <Navbar user={user} />
        </div>
      </div>
      <Router>
        <div className="ml-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/*" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
