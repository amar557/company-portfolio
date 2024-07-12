import like from "../assets/like.svg";
import heroImg from "../assets/Illustration.svg";
import ButtonPrimary from "./ButtonPrimary";
import FollowUs from "./FollowUs";

function Hero() {
  return (
    <div className="flex md:flex-row flex-col gap-5 md:gap-0 items-start md:items-center justify-between w-11/12 sm:w-10/12 mx-auto md:h-[590px]">
      <div className="flex flex-col items-start">
        <p className="flex items-center text-lg font-normal gap-2">
          {" "}
          <img src={like} alt="" /> <span>Welcome To Ahyliz Technologies</span>
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl  font-bold  md:leading-[4rem]">
          Leading the Way <br /> in Digital <br /> Innovation.
          <span className="text-lg font-normal block">
            Empowering Your Digital Future
          </span>
        </h1>
        <div className="flex items-center justify-start gap-5 mt-7">
          <ButtonPrimary>explore more</ButtonPrimary>
          <button className="text-primary">contact us</button>
        </div>
        <FollowUs />
      </div>
      <div className="md:block hidden">
        <img src={heroImg} alt="" className="h-[325px] w-[578px] " />
      </div>
    </div>
  );
}

export default Hero;
