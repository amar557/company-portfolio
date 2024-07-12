import sman from "../assets/sman.png";
import ourstory from "../assets/ourstory.png";
import ButtonSecondary from "./ButtonSecondary";
import HeadingPrimary from "./HeadingPrimary";
import HowItWorks from "../components/HowItWorks";

const listOfOurStory = [
  "Founded in 2021, Ahyliz Technologies is driven by a passion for innovation and empowering businesses with transformative technology solutions.",
  "Our journey is defined by relentless determination and unwavering commitment.",
  "Our dedicated team embodies our core values of collaboration, creativity, and excellence, working together to inspire and empower businesses to thrive in the digital age.",
  "As we look ahead, our commitment to innovation, client success, and positive impact remains unwavering.",
];
function OurStory() {
  return (
    <>
      <div className="my-10 gap-4 w-10/12 mx-auto flex items-start md:flex-row flex-col justify-between">
        <img
          src={sman}
          alt=""
          className="shrink h-[516px] md:w-1/2 object-contain w-full"
        />

        <div className="grow flex flex-col gap-4 md:w-1/2 w-full">
          <ButtonSecondary text={"our story"} img={ourstory} />
          <HeadingPrimary>discover our journey</HeadingPrimary>
          {listOfOurStory.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <HowItWorks />
      </div>
    </>
  );
}

export default OurStory;
