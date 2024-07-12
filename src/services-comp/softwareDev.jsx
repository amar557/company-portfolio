import HeadingPrimary from "../components/HeadingPrimary";
import custom from "../assets/custom.svg";
import system from "../assets/system.svg";
import software from "../assets/software.svg";
import agile from "../assets/agile.svg";
import userEX from "../assets/userEX.svg";
import APIDev from "../assets/APIDev.svg";
import { ServiceCard } from "./ManagedIT";
const mangement = [
  {
    img: custom,
    heading: "Custom Application Development",
    text: "Our team excels in designing and developing bespoke applications across a variety of platforms. ",
  },
  {
    img: system,
    heading: "System Integration",
    text: "We specialize in seamlessly integrating new software with your existing IT infrastructure.",
  },
  {
    img: software,
    heading: "Software Modernization",
    text: "We modernize outdated systems by migrating them to advanced platforms that significantly improve performance and reduce maintenance costs. ",
  },
  {
    img: agile,
    heading: "Agile Development Practices",
    text: "By adopting agile methodologies, we guarantee flexibility, rapid delivery, and continuous enhancement throughout the software development lifecycle. ",
  },
  {
    img: userEX,
    heading: "User Experience & Interface Design",
    text: "We prioritize user experience (UX) and user interface (UI) design in all our software projects to ensure intuitive and engaging applications design. ",
  },
  {
    img: APIDev,
    heading: "API Development & Management",
    text: "Our developers create powerful, secure, and well-documented APIs that allow your applications to interact seamlessly with other systems. ",
  },
];
function SoftwareDev() {
  return (
    <div className="w-10/12 mx-auto text-center my-10 space-y-3">
      <HeadingPrimary>Software Development</HeadingPrimary>
      <p className="mb-4">
        Tailored Software Solutions to Drive Business Innovation
      </p>
      <div className="flex items-stretch justify-center flex-wrap gap-4">
        {mangement.map((card, i) => (
          <ServiceCard service={card} key={i} />
        ))}
      </div>
    </div>
  );
}

export default SoftwareDev;
