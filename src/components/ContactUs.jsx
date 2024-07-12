import call from "../assets/call.png";
import map from "../assets/map.png";
import ButtonSecondary from "./ButtonSecondary";
import { SlLocationPin } from "react-icons/sl";
import { BiMessageAltCheck } from "react-icons/bi";
import ButtonPrimary from "./ButtonPrimary";
function ContactUs() {
  return (
    <div
      style={{
        background: `url(${map})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        paddingBottom: "55px",
      }}
    >
      <div className="w-10/12 mx-auto mt-5  flex xmd:flex-row flex-col items-start">
        <div className="flex flex-col gap-5 w-full sm:w-3/4 xmd:w-[55%]">
          <ButtonSecondary img={call} text={"contact us"} />
          <h2 className="text-3xl font-bold ">
            Let’s talk! <br /> Love to hear from you.
          </h2>
          <div className="flex items-center gap-4 ">
            <div className="flex items-start justify-start gap-3 w-1/2">
              <span className="text-primary mt-1">
                <SlLocationPin />
              </span>
              <div>
                <h1 className="font-medium mb-3">Our Location</h1>
                <p className="text-sm text-slate-800">
                  34 Minowan Miikan Lane, Toronto, ON M6J 0G3
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3 w-1/2">
              <span className="text-primary mt-1">
                <BiMessageAltCheck />
              </span>
              <div>
                <h1 className="font-medium mb-3">How Can We Help?</h1>
                <p className="text-sm text-slate-800">info@ahyliz.ca</p>
                <p className="text-sm text-slate-800">contact@ahyliz.ca</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg md:p-12 p-8 xmd:w-2/5 sm:w-1/2 w-full  bg-white">
          <h1 className="md:text-3xl text-xl font-medium mb-8">
            send us a message{" "}
          </h1>
          <label htmlFor="" className="my-2 block capitalize text-sm">
            Full Name*
          </label>
          <input
            type="text"
            className="outline-none border-b block placeholder:text-slate-500 text-sm placeholder:textsm py-2 w-full"
            placeholder="Adam Gelius"
          />
          <label htmlFor="" className="my-2 block capitalize text-sm">
            email*
          </label>
          <input
            type="text"
            className="outline-none border-b block placeholder:text-slate-500 text-sm placeholder:textsm py-2 w-full"
            placeholder="example@yourmail.com"
          />
          <label htmlFor="" className="my-2 block capitalize text-sm">
            phone*
          </label>
          <input
            type="text"
            className="outline-none border-b block placeholder:text-slate-500 text-sm placeholder:textsm py-2 w-full"
            placeholder="+1 1254 5211 552"
          />
          <label htmlFor="" className="my-2 block capitalize text-sm">
            message*
          </label>
          <input
            type="text"
            className="outline-none border-b block placeholder:text-slate-500 text-sm placeholder:textsm py-2 w-full"
            placeholder="type your message here"
          />
          <div className="mt-3">
            <ButtonPrimary>send</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
