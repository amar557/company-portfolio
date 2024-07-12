import ButtonSecondary from "./ButtonSecondary";
import like from "../assets/like.png";
import HeadingPrimary from "./HeadingPrimary";
const whyUs = [
  {
    heading: "Expertise",
    text: "Our team comprises industry-leading professionals with extensive experience across various IT disciplines, from software engineering to cloud computing to cybersecurity.",
  },
  {
    heading: "Innovation",
    text: "We're pioneers of technological innovation, constantly exploring new ideas and solutions to drive business growth. Dedicated to staying ahead of the curve, we leverage cutting-edge technologies and strategies to deliver optimal outcomes for our clients.",
  },
  {
    heading: "Customer Focus",
    text: "At Ahyliz Technologies, customer satisfaction is our top priority. We provide personalized service and support, ensuring your needs are addressed promptly and effectively.",
  },
  {
    heading: "Value",
    text: "We provide competitive pricing and flexible solutions to meet your budget and timeline.Expect maximum value and a solid return on your technology investment with Ahyliz Technologies.",
  },
];
function WhyUs() {
  return (
    <div className="sm:w-10/12 w-11/12 mx-auto my-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <ButtonSecondary text={"why choose us"} img={like} />
        <HeadingPrimary>Why Ahyliz Technologies?</HeadingPrimary>
        <p>
          Expertise, Innovation, Partnership, Excellence, Customer Focus, Value
        </p>
      </div>
      <div className="flex items-start flex-wrap xmd:flex-nowrap my-8 ">
        {whyUs.map((card, i) => (
          <div
            key={i}
            className="space-y-3 border-b  lg:p-8 p-4 xmd:w-1/4 min-h-[100px] md:w-2/6 w-full sm:w-[47%] md:min-h-[350px] cursor-pointer group hover:bg-primary  transition-all hover:text-white  border-e"
          >
            <h2 className="text-lg font-semibold">{card.heading}</h2>
            <p className="text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
