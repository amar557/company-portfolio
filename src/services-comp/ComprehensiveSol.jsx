import ITSolutions from "../assets/ITSolutions.svg";
import HowItWorks from "../components/HowItWorks";
function ComprehensiveSol() {
  return (
    <div className="text-center w-10/12 mx-auto my-8">
      <p className="my-10">Comprehensive IT and Software Solutions</p>
      <div className="flex items-center justify-between xmd:flex-row flex-col gap-8">
        <img
          src={ITSolutions}
          alt=""
          className="w-[395.29px] h-[300px] md:h-[383px]"
        />
        <div className="text-start space-y-8">
          <p>
            Together with Enterprise Digital Transformation, Cloud Consulting,
            and Managed IT Services, our Software Development capabilities form
            a complete suite of solutions that support every aspect of your
            digital and IT strategy.
          </p>
          <p>
            This holistic approach ensures that cutting-edge technology not only
            propels your business forward but also integrates smoothly to create
            a cohesive and efficient IT ecosystem. Through our comprehensive
            services, Ahyliz Technologies empowers your business to navigate the
            complexities of the digital world with confidence and strategic
            advantage.
          </p>
        </div>
      </div>
      <HowItWorks />
    </div>
  );
}

export default ComprehensiveSol;
