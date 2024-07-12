import ButtonSecondary from "./ButtonSecondary";
import starImg from "../assets/starOS.svg";
import servicesImg from "../assets/servicesImg.svg";
import HowItWorks from "./HowItWorks";
import HeadingPrimary from "./HeadingPrimary";

function OurServices() {
  return (
    <div className="sm:w-10/12 w-11/12 mx-auto">
      <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center">
        <ButtonSecondary text={"our services"} img={starImg} />
        <HeadingPrimary>
          Elevating Your Business with Tailored Solutions
        </HeadingPrimary>

        <p className="font-normal ">
          Get your self ready for the most comprehensive solutions
        </p>
      </div>
      <div className="flex items-start justify-between md:flex-nowrap  md:flex-row flex-col mt-6 md:gap-0 gap-4 md:h-[320px]">
        <div className="md:w-1/4 w-full flex flex-col gap-3 md:gap-0 items-start justify-between md:text-end text-start h-full">
          <div>
            <h2 className="text-base font-medium">
              Enterprise Digital Transformation
            </h2>
            <p className="text-sm">
              Transform your business with Ahyliz Technologies' comprehensive
              Enterprise Digital Transformation
            </p>
          </div>
          <div>
            <h2 className="text-base font-medium">Software Development</h2>
            <p className="text-sm">
              Drive innovation and efficiency with Ahyliz Technologies' Software
              Development services.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full ">
          <img src={servicesImg} alt="" className="max-h-[320px] w-full" />
        </div>
        <div className="md:w-1/4 w-full h-full flex items-center gap-3 md:gap-0 justify-between flex-col">
          <div>
            <h2 className="text-base font-medium">Cloud Consulting Services</h2>
            <p className="text-sm">
              Navigate the complexities of cloud environments with Ahyliz
              Technologies' Cloud Consulting services.
            </p>
          </div>
          <div>
            <h2 className="text-base font-medium">Managed IT Services</h2>
            <p className="text-sm">
              Ensure uninterrupted business operations with Ahyliz Technologies'
              Managed IT Services.
            </p>
          </div>
        </div>
      </div>
      <HowItWorks />
    </div>
  );
}

export default OurServices;
