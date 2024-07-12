import like from "../assets/like.svg";
import container from "../assets/Container.png";
import softeng from "../assets/Software Engg.svg";
import cloud from "../assets/cloud-comp.svg";
import cybersec from "../assets/cyber-sec.svg";
import ButtonPrimary from "./ButtonPrimary";
import expecImg from "../assets/expec.svg";
import growImg from "../assets/grow.svg";
import starImg from "../assets/star.svg";
import ButtonSecondary from "./ButtonSecondary";
import HeadingPrimary from "./HeadingPrimary";
const services = [
  { img: softeng, text: "software development" },
  { img: cloud, text: "cybersecuirity" },
  { img: cybersec, text: "cloud computing" },
];

const servicesDetail = [
  {
    img: starImg,
    textPrimary: "Leading IT Service Provider",
    textSecondary:
      "Ahyliz Technologies stands at the forefront of the industry, providing innovative IT solutions tailored to meet the evolving needs of businesses.",
  },
  {
    img: expecImg,
    textPrimary: "Exceeding Client Expectations",
    textSecondary:
      "Our commitment to excellence ensures that we go above and beyond to deliver solutions that surpass the expectations of our clients, driving tangible business results.",
  },
  {
    img: growImg,
    textPrimary: "Driving Business Growth",
    textSecondary:
      "By leveraging cutting-edge technology and strategic expertise, we empower businesses to achieve substantial growth and operational efficiency.",
  },
];
function AboutUs() {
  return (
    <div className="bg-[#F4F9FF]">
      <div className="flex items-center justify-center flex-col pt-12 gap-3 sm:w-10/12 w-11/12 mx-auto">
        <ButtonSecondary text={"about us"} img={like} />
        <HeadingPrimary>
          Leading the Way in Tailored IT Solutions
        </HeadingPrimary>

        <p className="font-medium">
          Pioneering excellence in technology services
        </p>
      </div>
      <div className="flex items-start md:flex-row flex-col justify-center gap-4 mt-10 w-11/12 sm:w-10/12 mx-auto">
        <div className="">
          <img
            src={container}
            className="w-full max-h-[540px] object-contain"
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-8">
          <p className="sm:text-xl text-sm  text-center font-medium sm:font-normal ">
            Welcome to Ahyliz Technologies - Pioneers of Digital <br />{" "}
            Innovation.
          </p>
          <p className="text-sm ">
            As leaders in Enterprise Digital Transformation, Cloud Consulting,
            Managed IT Services, and Software Development, we provide businesses
            with the sophisticated technology frameworks essential for excelling
            in today's dynamic digital environment.
          </p>
          <p className="text-sm">
            Explore our comprehensive IT solutions and discover how they can
            revolutionize your business operations, propelling you to a
            substantial competitive edge.
          </p>
          <div className="space-y-2 sm:space-y-6">
            {services.map((item, i) => (
              <div className="flex items-center gap-4" key={i}>
                <img src={item.img} alt="" className="h-10 w-10" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ButtonPrimary> read more</ButtonPrimary>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap pb-4 sm:w-10/12 w-11/12 mx-auto md:gap-12 sm:gap-8 gap-4 my-6">
        {servicesDetail.map((item, i) => (
          <div
            className="flex flex-col items-center sm:w-[45%] w-full md:w-[28%] gap-2 md:gap-4  "
            key={i}
          >
            <img src={item.img} alt="" className="h-[150px] object-contain " />
            <h5 className="text-lg text-center font-medium">
              {item.textPrimary}
            </h5>
            <p className="text-sm text-center">{item.textSecondary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
