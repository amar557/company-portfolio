import HeadingPrimary from "../components/HeadingPrimary";
import monitoring from "../assets/monitoring.svg";
import maintainance from "../assets/maintainance.svg";
import backup from "../assets/backup.svg";
import cloud_ser from "../assets/cloud-serv.svg";
import vendor from "../assets/vendor.svg";
import secuirity from "../assets/secuirity.svg";

const mangement = [
  {
    img: monitoring,
    heading: "Continuous Monitoring",
    text: "We operate 24/7 system monitoring to swiftly identify and resolve potential issues before they disrupt your business operations. ",
  },
  {
    img: maintainance,
    heading: "IT Support & Maintenance",
    text: "Our dedicated team provides round-the-clock support and performs regular maintenance to ensure that your IT systems function smoothly. ",
  },
  {
    img: secuirity,
    heading: "Security Management",
    text: "We implement stringent security protocols to safeguard your data and IT infrastructure from emerging cyber threats. ",
  },
  {
    img: backup,
    heading: "Backup and Disaster Recovery",
    text: "We establish reliable backup solutions and disaster recovery plans to protect your critical data and ensure business continuity in any scenario. ",
  },
  {
    img: cloud_ser,
    heading: "Cloud Services Management",
    text: "Whether you're using public, private, or hybrid cloud environments, our team manages and optimizes your cloud resources. ",
  },
  {
    img: vendor,
    heading: "Vendor and Asset Management",
    text: "We oversee all your IT vendor relationships and manage your IT asset lifecycle to ensure you get the best service and value from your investments. ",
  },
];
function ManagedIT() {
  return (
    <div className="text-center w-10/12 mx-auto my-8">
      <HeadingPrimary>Managed IT Services</HeadingPrimary>
      <p>Proactive IT Management for Uninterrupted Business Operations</p>
      <div className="flex items-center my-5 flex-wrap justify-between gap-4 ">
        {mangement.map((service, i) => (
          <ServiceCard service={service} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ManagedIT;

export const ServiceCard = function ({ service }) {
  return (
    <div className="md:w-[30%] w-full sm:w-[47%] flex gap-4 flex-col items-center justify-center shadow-lg p-5">
      <img src={service.img} alt="" />
      <h2 className="text-xl font-medium text-center">{service.heading}</h2>
      <p className="text-sm text-start">{service.text}</p>
    </div>
  );
};
