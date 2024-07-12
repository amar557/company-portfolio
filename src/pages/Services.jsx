import ClientsEx from "../components/ClientsEx";
import HowItWorks from "../components/HowItWorks";
import WhyUs from "../components/WhyUs";
import CloudConsulting from "../services-comp/CloudConsulting";
import ComprehensiveSol from "../services-comp/ComprehensiveSol";
import Hero from "../services-comp/Hero";
import ManagedIT from "../services-comp/ManagedIT";
import Navigating from "../services-comp/Navigating";
import OurServices from "../services-comp/OurServices";
import SoftwareDev from "../services-comp/softwareDev";

function Services() {
  return (
    <>
      <Hero />
      <OurServices />
      <ManagedIT />
      <Navigating />
      <CloudConsulting />
      <SoftwareDev />
      <ComprehensiveSol />
      <WhyUs />
      <ClientsEx />
    </>
  );
}

export default Services;
