// import logo from './logo.svg';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Pricing from "./components/pricing/pricing";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
