import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function FollowUs() {
  return (
    <div className="flex items-center justify-start gap-5 my-3 ">
      <span className="text-primary uppercase tracking-widest font-normal">
        follow us
      </span>
      <span className="flex items-center text-primary gap-3 text-sm ">
        <AiFillInstagram />
        <FaLinkedinIn />
        <IoLogoTwitter />
        <FaFacebookF />
      </span>
    </div>
  );
}

export default FollowUs;
