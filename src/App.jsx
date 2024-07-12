import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Legal from "./pages/Legal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/legal" element={<Legal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
