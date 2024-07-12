import ButtonSecondary from "./ButtonSecondary";
import like from "../assets/like.png";
import HeadingPrimary from "./HeadingPrimary";
import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";
import dev3 from "../assets/dev3.jpg";
import dev4 from "../assets/dev4.jpg";
import dotedImg from "../assets/DottedShape.svg";
import ellipseImg from "../assets/Ellipse.png";
const devInfo = [
  { img: dev1, name: "Coriss Ambady", position: "Web Developer" },
  { img: dev2, name: "glorius Cristian", position: "app Developer" },
  { img: dev3, name: "glorius Cristian", position: "UI/UX Designer" },
  { img: dev4, name: "Nikolas Brooten", position: "Sales Manager" },
];
function OurTeam() {
  return (
    <div className="bg-[#F4F9FF]">
      <div className="flex flex-col items-center justify-center py-10">
        <ButtonSecondary img={like} text={"our team"} />
        <HeadingPrimary>Learn who we are?</HeadingPrimary>
        <p>Meet our expert and innovative team</p>
      </div>
      <div className="w-10/12 mx-auto flex items-center gap-4 lg:flex-nowrap flex-wrap">
        {devInfo.map((developer, i) => (
          <div
            className=" h-[330px] w-full sm:w-[48%]  lg:w-[270px] flex items-end justify-end rounded-lg"
            key={i}
            style={{
              background: `url(${developer.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingBottom: "30px",
            }}
          >
            <div className="bg-white py-4 rounded-lg  w-10/12 mx-auto relative text-center">
              <img src={dotedImg} className="absolute right-0 top-0" alt="" />
              <h4 className="text font-semibold capitalize ">
                {developer.name}
              </h4>
              <p className="text-sm">{developer.position}</p>
              <img
                src={ellipseImg}
                className="absolute left-0 bottom-0"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
