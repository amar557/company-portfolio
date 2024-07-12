import ButtonSecondary from "./ButtonSecondary";
import like from "../assets/like.png";
import softeng from "../assets/Software Engg.svg";
import cloud from "../assets/cloud-comp.svg";
import cybersec from "../assets/cyber-sec.svg";
import setting from "../assets/setting.png";
import HeadingPrimary from "./HeadingPrimary";
import ButtonPrimary from "./ButtonPrimary";
const data = [
  { img: cybersec, para: "Enterprise DIgital Transformation" },
  { img: cloud, para: "Cloud Consulting" },
  { img: setting, para: "Managed IT Services" },
  { img: softeng, para: "Software Development" },
];
function OurMission() {
  return (
    <div className="w-10/12 mx-auto bg-[#F4F9FF] rounded-lg">
      <div className="flex items-center justify-center flex-col gap-8 w-11/12 py-8 mx-auto md:text-start text-center">
        <ButtonSecondary text={"our mission"} img={like} />
        <HeadingPrimary>
          Ahyliz Technologies: Leading the Charge in Customized IT Solutions
        </HeadingPrimary>
        <p className="text-center">
          As a premier IT service provider, we specialize in Enterprise Digital
          Transformation, Cloud Consulting, Managed IT Services, and Software
          Development.
        </p>
        <p className="text-center">
          Our team is composed of elite professionals with extensive expertise
          in these key areas, ensuring that our solutions not only meet but
          exceed the specific needs and expectations of our clients. This
          comprehensive approach catalyzes significant business growth and
          enhances operational efficiency.
        </p>
        <div className="flex gap-4 items-center flex-wrap justify-between">
          {data.map((service, i) => (
            <div
              className="xmd:w-1/3 md:w-[47%] w-full    flex items-center gap-4"
              key={i}
            >
              <img src={service.img} className="h-10 w-10" alt="" />
              <p>{service.para}</p>
            </div>
          ))}
        </div>
        <ButtonPrimary>join us now</ButtonPrimary>
      </div>
    </div>
  );
}

export default OurMission;
