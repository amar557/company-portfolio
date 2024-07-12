import LoveImg from "../assets/heart.svg";
import commas from "../assets/commas.svg";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.svg";
import user3 from "../assets/user3.svg";
import ButtonSecondary from "./ButtonSecondary";
import HeadingPrimary from "./HeadingPrimary";

const clientsReviews = [
  {
    para: "Managed IT services by Ahyliz Technologies ensured our systems ran smoothly, allowing us to focus on core business operations.",
    img: user1,
    name: "Stephen",
  },
  {
    para: "Impressive cloud consulting services from Ahyliz Technologies. Seamless transition and improved efficiency!",
    img: user2,
    name: "Alen Max",
  },
  {
    para: "Ahyliz Technologies transformed our outdated systems into efficient digital solutions. Highly recommend their expertise!",
    img: user3,
    name: "Sarah",
  },
];

function ClientsEx() {
  return (
    <div className="sm:w-10/12 w-11/12 mt-8 mx-auto">
      <div className="flex items-center gap-3 mb-3 justify-center flex-col text-center">
        <ButtonSecondary text={"people love us"} img={LoveImg} />
        <HeadingPrimary>Discover Our Clients' Experiences</HeadingPrimary>
        <p className="font-medium">Insights from satisfied customers</p>
      </div>
      <div className="flex my-4 md:my-8 items-center flex-wrap  justify-between">
        {clientsReviews.map((cur, i) => (
          <div
            className="xmd:w-[30%] sm:w-[48%] w-full flex flex-col items-center  justify-center md:gap-5 gap-2 "
            key={i}
          >
            <div
              className="flex items-center justify-center flex-col shadow-xl md:p-12 p-8
             gap-4 rounded-xl group hover:bg-primary transition-all cursor-pointer hover:text-white"
            >
              <img src={commas} alt="" className="text-black   filter-white" />
              <p className="text-center md:text-base text-sm">{cur.para}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={cur.img}
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <p>{cur.name}</p>
              <p>@client</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsEx;
