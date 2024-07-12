import ButtonSecondary from "./ButtonSecondary";
import like from "../assets/like.png";
import handImg from "../assets/hand.svg";
import worldImg from "../assets/world.svg";
import HeadingPrimary from "./HeadingPrimary";
const achievements = [
  {
    img: handImg,
    heading: "Industry Recognition",
    text: "Ahyliz Technologies has been recognized by industry leaders and publications for our pioneering work in digital transformation and IT services. Our accolades include awards for 'Best IT Services Provider' and 'Innovator in Cloud Solutions.'",
  },
  {
    img: worldImg,
    heading: "Global Clientele",
    text: "We have successfully partnered with over 500 companies worldwide, including Fortune 500 firms, providing them with tailored IT solutions that have revolutionized their operations and enhanced their competitiveness in the market.",
  },
];
function OurAchievMents() {
  return (
    <div className="bg-[#F4F9FF] py-10">
      <div className="flex flex-col w-11/12 sm:w-10/12 mx-auto gap-4 items-center justify-center">
        <ButtonSecondary text={"Our Achievements & Work "} img={like} />
        <HeadingPrimary>
          Leading the Way in Tailored IT Solutions
        </HeadingPrimary>
        <p className="text-center">
          At Ahyliz Technologies, our commitment to excellence and innovation is
          reflected in the success stories and achievements we have amassed over
          the years. We pride ourselves on our ability to deliver transformative
          IT solutions across various sectors. Here are some highlights of our
          work and the milestones we have achieved:
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap w-10/12 gap-3 md:gap-0 mx-auto">
        {achievements.map((ach, i) => (
          <div
            className="flex items-center gap-4 justify-center flex-col w-full md:w-[47%] xmd:w-5/12"
            key={i}
          >
            <img src={ach.img} alt="" className="h-[120px] w-[160px]" />
            <h3 className="font-semibold">{ach.heading}</h3>
            <p className="text-center">{ach.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurAchievMents;
