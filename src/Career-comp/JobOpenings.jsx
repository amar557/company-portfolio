import ButtonSecondary from "../components/ButtonSecondary";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import like from "../assets/like.png";
import { FaCalendarDays } from "react-icons/fa6";
import { PiMoneyWavyFill } from "react-icons/pi";
import HeadingPrimary from "../components/HeadingPrimary";
import HowItWorks from "../components/HowItWorks";
const jobs = [
  {
    title: "Full Stack Developer",
    req: ["full time", "1-3 years"],
    benifits: [
      { icon: <PiMoneyWavyFill />, text: "USD $100k - $120k" },
      { icon: <FaLocationDot />, text: "Toronto, Canada" },
      { icon: <FaCalendarDays />, text: "June 15, 2024" },
    ],
    days: 15,
  },
  {
    title: "DevOps Engineer",
    req: ["full time", "1-3 years"],
    benifits: [
      { icon: <PiMoneyWavyFill />, text: "USD $100k - $120k" },
      { icon: <FaLocationDot />, text: "Toronto, Canada" },
      { icon: <FaCalendarDays />, text: "June 15, 2024" },
    ],
    days: 15,
  },
];
function JobOpenings() {
  return (
    <div className="flex items-center sm:w-10/12 w-11/12 mx-auto flex-col">
      <ButtonSecondary text={"Check For New Openings"} img={like} />
      <HeadingPrimary>
        Ready to be stretched to reach your fullest potential?
      </HeadingPrimary>
      <p>Take your skills and passion to the next level</p>
      <div className="flex items-center gap-8 my-10 xmd:flex-row flex-col  justify-between w-full">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="grow flex flex-col xmd:w-auto w-full gap-4 p-8 shadow-lg rounded-xl"
          >
            <div className="flex items-center justify-between">
              <h2>{job.title}</h2>
              <span className="text-primary bg-secondary p-2 rounded-full text-lg">
                <CiBookmarkPlus />
              </span>
            </div>
            <div className="space-x-3 ">
              {job.req.map((req, i) => (
                <span
                  key={i}
                  className="text-black bg-secondary p-2 rounded-full text-sm"
                >
                  {req}
                </span>
              ))}
            </div>
            {job.benifits.map((ben, i) => (
              <div className="flex items-center gap-4" key={i}>
                <span className="text-primary text-2xl">{ben.icon}</span>
                <span>{ben.text}</span>
              </div>
            ))}

            <div className="flex items-center justify-between">
              <span>posted {job.days} days agi</span>
              <button className="border-primary border py-2 px-3 rounded-full capitalize text-primary">
                apply now
              </button>
            </div>
          </div>
        ))}
      </div>
      <HowItWorks />
    </div>
  );
}

export default JobOpenings;
