import ButtonSecondary from "../components/ButtonSecondary";
import like from "../assets/like.png";
import call from "../assets/call-.svg";
import mail from "../assets/mail.svg";
import seting from "../assets/seting.svg";
import HeadingPrimary from "../components/HeadingPrimary";
import { IoCallOutline } from "react-icons/io5";
import { PiHeadCircuit } from "react-icons/pi";
const cards = [
  {
    heading: "Call Us",
    icon: call,
    desc: "Keen to chat with one of our Expert? Go on, we don’t bite. Give us a call on the number below.",
    btntext: " 12345 246189",
    btnIcon: <IoCallOutline />,
  },
  {
    heading: "Email Us",
    icon: mail,
    desc: "Email us now about any problem you face with your business. Do share your concern with us",
    btntext: "  Email us Now",
    btnIcon: "@",
  },
  {
    heading: "Support",
    icon: seting,
    desc: "If you are an existing Ahyliz Technologies customer looking for any support please open chat bot",
    btntext: "Open Chat Bot",
    btnIcon: <PiHeadCircuit />,
  },
];
function ContactUs() {
  return (
    <div className="bg-secondary py-10 w-11/12 sm:w-10/12 my-8 mx-auto rounded-xl">
      <div className="flex items-center justify-center flex-col gap-3">
        <ButtonSecondary img={like} text={"Contact us"} />
        <HeadingPrimary>Get in Touch With Us Now</HeadingPrimary>
        <p>Contact us without any hesitation</p>
      </div>
      <div className="flex items-center justify-center gap-10  px-4 flex-wrap my-8">
        {cards.map((card, i) => (
          <div
            className="grow hover:text-white hover:bg-primary p-4 lg:p-8 rounded-lg md:w-[30%] transition-all group space-y-4"
            key={i}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-lg">{card.heading}</h3>
                <p className="text-sm">{card.desc}</p>
              </div>

              <img src={card.icon} alt="" className="h-12 w-12 filter-white" />
            </div>
            <button className="flex items-center gap-2 group-hover:bg-white     border border-primary rounded-3xl text-primary px-2 py-1">
              {card.btnIcon}
              <span> {card.btntext}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
