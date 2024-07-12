import ButtonSecondary from "../components/ButtonSecondary";
import starImg from "../assets/starOS.svg";
import softeng from "../assets/Software Engg.svg";
import cloud from "../assets/cloud-comp.svg";
import tech from "../assets/tech.svg";
import ourServices from "../assets/ourservices.svg";
import HeadingPrimary from "../components/HeadingPrimary";
const services = [
  { img: softeng, text: "Digital Strategy Development" },
  { img: tech, text: "Technology Implementation" },
  { img: cloud, text: "Change Management" },
];
function OurServices() {
  return (
    <div>
      <div className="flex my-6 items-center justify-center">
        <ButtonSecondary text={"our services"} img={starImg} />
      </div>
      <div className="bg-secondary text-center py-10">
        <HeadingPrimary>Enterprise Digital Transformation</HeadingPrimary>
        <p>Redefine your business for the digital age with us.</p>
        <div className="flex items-start justify-between my-8 xmd:flex-row flex-col gap-6 text-start w-10/12 mx-auto">
          <img
            src={ourServices}
            alt=""
            className="xmd:w-1/2 h-[300px] xmd:h-auto w-full "
          />
          <div className="flex flex-col items-start gap-4 justify-center w-full xmd:w-1/2">
            <h1 className="text-xl font-medium">
              Empower Your Business with a Strategic Overhaul
            </h1>
            <p>
              At Ahyliz Technologies, Enterprise Digital Transformation is about
              thoroughly redefining your business to thrive in the digital era.
              We harness a variety of enterprise architecture platforms, such as
              TOGAF, Zachman, and FEAF, to ensure that our solutions are built
              on proven methodologies and frameworks.
            </p>
            <p>
              Our comprehensive services are designed to drive operational
              excellence and spark innovation across your business.
            </p>
            <div className=" space-y-5">
              {services.map((item, i) => (
                <div key={i} className="flex items-center justify-start gap-4">
                  <img src={item.img} alt="" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
