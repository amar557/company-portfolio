import AboutUs from "../components/AboutUs";
import ClientsEx from "../components/ClientsEx";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import Questions from "../components/Questions";
import Works from "../components/Works";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <Works />
      <ClientsEx />
      <Questions />
      <ContactUs />
    </>
  );
}

export default Home;
