import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Journey from "./pages/Journey"
// import Learn from "./pages/Learn";
// import Act from "./pages/Act";
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey/>} />
        {/* <Route path="/learn" element={<Learn />} />
        <Route path="/act" element={<Act />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
