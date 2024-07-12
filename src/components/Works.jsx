import ButtonSecondary from "./ButtonSecondary";
import starImg from "../assets/starOS.svg";
import ATImg from "../assets/AT.png";
import clientImg from "../assets/client-rev.png";
import solutionImg from "../assets/solutions.png";
import ourWorkImg from "../assets/ourwork.png";
import HeadingPrimary from "./HeadingPrimary";
const clientRev = [
  {
    img: clientImg,
    heading: "clients",
    text: "  Businesses or individuals seeking technological solutions.",
  },
  {
    img: ATImg,
    heading: "Ahyliz Technologies",
    text: "Leading IT service provider offering innovative solutions.",
  },
  {
    img: solutionImg,
    heading: "Technology Solutions",
    text: "Tailored services addressing specific business needs.",
  },
];
function Works() {
  return (
    <div className="bg-[#F4F9FF] py-10">
      <div className="flex items-center justify-center flex-col gap-3 w-10/12 mx-auto">
        <ButtonSecondary text={"how it works"} img={starImg} />
        <HeadingPrimary>
          Streamlining Your Journey to Technological Excellence
        </HeadingPrimary>

        <p className="text-base font-medium">
          Navigating your path to seamless integration
        </p>
      </div>
      <OurWork />
    </div>
  );
}

export default Works;
export const OurWork = function () {
  return (
    <>
      <img
        src={ourWorkImg}
        alt=""
        className="w-10/12 xmd:block hidden mt-8 mx-auto"
      />
      <div className=" items-start justify-between h-[130px] w-10/12 mx-auto xmd:flex hidden  relative">
        {clientRev.map((item, i) => (
          <div
            className={`flex ${
              i === 1 && "self-end"
            } flex-col gap-3 items-center justify-between w-[25%] relative z-50`}
            key={i}
          >
            <h3 className="text-primary capitalize font-medium">
              {item.heading}
            </h3>
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </div>
      <div className=" items-start justify-between  w-10/12 mx-auto flex-wrap  xmd:hidden flex   relative">
        {clientRev.map((item, i) => (
          <div
            className={`flex  flex-col gap-3 items-center justify-between w-full sm:w-[48%]  md:w-[28%] relative z-50`}
            key={i}
          >
            <img src={item.img} alt="" />
            <h3 className="text-primary capitalize font-medium">
              {item.heading}
            </h3>
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
