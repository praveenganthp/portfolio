import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import ScrollToTopButton from './components/ScrollTopButton';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Service />} />
          <Route path="/about" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
