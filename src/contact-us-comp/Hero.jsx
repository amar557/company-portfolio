import call from "../assets/call-.svg";
import contactUs from "../assets/contactus.svg";
import ButtonPrimary from "../components/ButtonPrimary";
import FollowUs from "../components/FollowUs";
function Hero() {
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto">
      <div className="flex flex-col items-start">
        <p className="flex items-center text-lg font-normal gap-2">
          <img src={call} alt="" /> <span>Let’s Start a Conversation</span>
        </p>
        <h1 className="text-6xl font-bold leading-[4rem]">
          Reach Out to Us <br /> Today
          <span className="text-lg font-normal block">
            Our experts are available to answer any questions you might have.
            We’ve got the answers.
          </span>
        </h1>
        <div className="flex items-center justify-start gap-5 mt-7">
          <ButtonPrimary>get started</ButtonPrimary>
        </div>
        <FollowUs />
      </div>
      <div className="h-[600px] w-[450px]">
        <img src={contactUs} alt="" className="h-full" />
      </div>
    </div>
  );
}

export default Hero;
