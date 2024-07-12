import like from "../assets/like.png";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import FollowUs from "../components/FollowUs";
import HeadingPrimary from "../components/HeadingPrimary";

const clients = [
  {
    digit: "200+",
    text: "Clients Worldwide",
  },
  {
    digit: "800+",
    text: "Projects Completed",
  },
  {
    digit: "100%",
    text: "Customer Satisfaction",
  },
];
function AboutAboutUs() {
  return (
    <div className="mt-10 w-10/12 mx-auto">
      <div className="flex items-center justify-center flex-col gap-4 md:text-start text-center">
        <ButtonSecondary img={like} text={"about us"} />
        <HeadingPrimary>
          Leading the Way in Tailored IT Solutions
        </HeadingPrimary>
        <p>Empowering Your Digital Future</p>
        <ButtonPrimary>hire us</ButtonPrimary>
        <FollowUs />
      </div>
      <div className="flex items-center justify-center my-5">
        {clients.map((user, i) => (
          <div className="text-center w-[31%]" key={i}>
            <h2 className="text-primary">{user.digit}</h2>
            <p>{user.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutAboutUs;
