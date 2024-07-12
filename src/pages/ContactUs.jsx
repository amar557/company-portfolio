import Hero from "../contact-us-comp/Hero";
import Contact from "../Career-comp/ContactComp";
import HowItWorks from "../components/HowItWorks";
import Questions from "../components/Questions";
import ContactForm from "../components/ContactUs";

function ContactUs() {
  return (
    <>
      <Hero />
      <Contact />
      <div className="w-10/12 mx-auto">
        <HowItWorks />
      </div>
      <Questions />
      <ContactForm />
    </>
  );
}

export default ContactUs;
