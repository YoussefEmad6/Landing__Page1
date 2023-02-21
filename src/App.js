// import logo from './logo.svg';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./routes/Home";
import Faq from "./routes/Faq";
import Pricing from "./routes/Pricing";
import Contact from "./routes/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="pricing" element={ <Pricing/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="faq" element={ <Faq/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
