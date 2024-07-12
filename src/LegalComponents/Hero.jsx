import ButtonSecondary from "../components/ButtonSecondary";
import secure from "../assets/secure.svg";
import HeadingPrimary from "../components/HeadingPrimary";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function Hero() {
  return (
    <div className="bg-primary my-10 py-8">
      <div className="flex w-11/12 sm:w-10/12 mx-auto text-white items-center gap-4 justify-center flex-col">
        <ButtonSecondary text={"Legal"} img={secure} />
        <HeadingPrimary>Learn How We Safeguard Your Data</HeadingPrimary>
        <p>Our Commitment to Keeping Your Information Secure</p>
        <button className="capitalize  bg-white px-5  rounded-lg py-3  w-max text-primary">
          contact us
        </button>
        <div className="flex items-center justify-start gap-5 my-3 ">
          <span className="text-white uppercase tracking-widest font-normal">
            follow us
          </span>
          <span className="flex items-center text-white gap-3 text-sm ">
            <AiFillInstagram />
            <FaLinkedinIn />
            <IoLogoTwitter />
            <FaFacebookF />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
