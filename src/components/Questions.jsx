import wavetop from "../assets/wavetop.png";
import wavebottom from "../assets/wavebottom.png";
import message from "../assets/message-question.png";
import ButtonSecondary from "./ButtonSecondary";
import HeadingPrimary from "./HeadingPrimary";
import ButtonPrimary from "./ButtonPrimary";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useState } from "react";
const list = [
  "Enterprise Digital Transformation",
  "Cloud Consulting",
  "Managed IT Services",
  "Software Development.",
];

const accList = [
  {
    heading: "What is Ahyliz Technologies?",
    para: "Ahyliz Technologies is a leading IT service provider specializing in innovative technology solutions tailored to meet the diverse needs of businesses.",
  },
  {
    heading: "Does Ahyliz Technologies offer job opportunities?",
    para: "Ahyliz Technologies is a leading IT service provider specializing in innovative technology solutions tailored to meet the diverse needs of businesses.",
  },
  {
    heading: "What services does Ahyliz Technologies offer?",
    para: "Ahyliz Technologies is a leading IT service provider specializing in innovative technology solutions tailored to meet the diverse needs of businesses.",
  },
  {
    heading: "What industries does Ahyliz Technologies serve?",
    para: "Ahyliz Technologies is a leading IT service provider specializing in innovative technology solutions tailored to meet the diverse needs of businesses.",
  },
  {
    heading: "How to contact Ahyliz Technologies?",
    para: "Ahyliz Technologies is a leading IT service provider specializing in innovative technology solutions tailored to meet the diverse needs of businesses.",
  },
];
function Questions() {
  const [opened, setOpened] = useState(0);

  const handleAccordian = (i) => {
    setOpened(opened === i ? null : i);
  };
  return (
    <div>
      <img src={wavetop} alt="" />
      <div className="bg-[#F4F7FF] ">
        <div className="bg-[#F4F7FF] flex items-start md:gap-0 gap-4 justify-between md:flex-row flex-col w-11/12 sm:w-10/12 mx-auto">
          <div className="w-full md:w-2/5 gap-3 space-y-3">
            <ButtonSecondary text={"Got Question?"} img={message} />
            <HeadingPrimary>Frequently Asked Questions</HeadingPrimary>
            <p className="my-3">
              Learn more about the range of services provided by Ahyliz
              Technologies, including;
            </p>
            <ul className="space-y-3">
              {list.map((item, i) => (
                <li className="text-sm" key={i}>
                  {i + 1}. {item}
                </li>
              ))}
            </ul>
            <ButtonPrimary>ask question</ButtonPrimary>
          </div>
          <div className="md:w-[45%] w-full flex flex-col  gap-3 ">
            {accList.map((item, i) => (
              <div key={i}>
                <div
                  className="flex items-center  text-lg justify-between"
                  onClick={() => handleAccordian(i)}
                >
                  <span className="font-medium">{item.heading}</span>
                  <span className="text-primary text-xl">
                    {opened === i ? (
                      <IoArrowUpCircleOutline />
                    ) : (
                      <IoArrowDownCircleOutline />
                    )}
                  </span>
                </div>
                {opened === i && <p className="text-slate-800">{item.para}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={wavebottom} alt="" />
    </div>
  );
}

export default Questions;
