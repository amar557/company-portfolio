import footerLogo from "../assets/footerLogo.svg";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const footeData = [
  {
    list: [
      "Home",
      "Explore more",
      "Services we offer",
      "Careers",
      "FAQs",
      "Contact us",
    ],
  },
  {
    list: [
      "About us",
      "How it Works?",
      "Our Team",
      "Privacy Policy",
      "Terms of use",
      "Accessibility",
    ],
  },
  {
    list: ["Address", "34 Minowan Miikan Lane, Toronto, ON M6J 0G3"],
  },
  {
    list: [
      "Contact Us",
      "Tel: +1 (844) 400-7222",
      "Fax: +1 (844) 709-7333",
      "info@ahyliz.ca",
      "contact@ahyliz.ca",
    ],
  },
];
function Footer() {
  return (
    <div className="bg-primary text-white">
      <div className="w-10/12 mx-auto flex lg:gap-0 gap-4 items-start justify-between flex-wrap py-10">
        <div className="lg:w-1/5 md:w-[30%] sm:w-[48%] w-full space-y-2">
          <img src={footerLogo} alt="" />
          <p className="">Empowering Your Digital Future</p>
          <div className="text-xl text-white flex items-center">
            <IoLogoTwitter />
            <FaFacebookF />
            <AiFillInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        {footeData.map((item, i) => (
          <ul
            key={i}
            className="border-e space-y-2  border-[#FFFFFF4D] lg:w-1/5 md:w-[30%] sm:w-[48%] w-full ps-5 min-h-[208px]"
          >
            {item.list.map((it, i) => (
              <li className=" first-letter:uppercase" key={i}>
                {it}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p className="text-center border-t border-[#FFFFFF4D] py-3 text-sm">
        © 2024 Rights Reserved By Ahyliz Technologies
      </p>
    </div>
  );
}

export default Footer;
