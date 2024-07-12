import call from "../assets/call-.svg";
import services from "../assets/services.svg";
import team from "../assets/team.svg";
import careerteam from "../assets/careerteam.svg";
import ButtonPrimary from "../components/ButtonPrimary";
import FollowUs from "../components/FollowUs";
function CHero() {
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto">
      <div className="flex flex-col items-start">
        <p className="flex items-center text-lg font-normal gap-2">
          <img src={team} alt="" /> <span>Join Our Team</span>
        </p>
        <h1 className="text-6xl font-bold leading-[4rem]">
          Empower Your <br /> Potential
          <span className="text-lg font-normal block">
            Discover Opportunities for Growth and Innovation
          </span>
        </h1>
        <div className="flex items-center justify-start gap-5 mt-7">
          <ButtonPrimary>get started</ButtonPrimary>
        </div>
        <FollowUs />
      </div>
      <div className="h-[600px] w-[450px]">
        <img src={careerteam} alt="" className="h-full" />
      </div>
    </div>
  );
}

export default CHero;
