import HeadingPrimary from "../components/HeadingPrimary";
import servicesImg from "../assets/consulting.svg";

function CloudConsulting() {
  return (
    <div className="text-center py-10 bg-secondary">
      <HeadingPrimary>cloud consulting</HeadingPrimary>
      <p>Expert Guidance Through Your Cloud Journey</p>
      <div className="flex items-center xmd:items-start justify-between md:flex-nowrap  md:flex-row flex-col mt-6 md:gap-0 gap-4 md:h-[320px]">
        <div className="md:w-1/4 w-full flex flex-col gap-3 md:gap-0 items-start justify-between md:text-end text-start h-full">
          <div>
            <h2 className="text-base font-medium">Cloud Architecture Design</h2>
            <p className="text-sm">
              Our experts design robust, scalable, and secure cloud solutions
              that are cost-effective and tailored to meet the unique demands of
              your business
            </p>
          </div>
          <div>
            <h2 className="text-base font-medium">
              Vendor Selection & Management
            </h2>
            <p className="text-sm">
              Choosing the right cloud provider is crucial for your cloud
              journey. We assist in selecting the most suitable cloud vendors
              that align with your business objective
            </p>
          </div>
        </div>
        <div className="w-[45%] ">
          <img src={servicesImg} alt="" className="max-h-[320px] w-full" />
        </div>
        <div className="md:w-1/4 text-start w-full h-full flex items-center gap-3 md:gap-0 justify-between flex-col">
          <div>
            <h2 className="text-base font-medium">Expert Guidance</h2>
            <p className="text-sm">
              Our Cloud Consulting services at Ahyliz Technologies are
              meticulously crafted to guide you through the complexities of
              cloud environments.
            </p>
          </div>
          <div>
            <h2 className="text-base font-medium">
              Cloud Readiness Assessment
            </h2>
            <p className="text-sm">
              We evaluate your existing infrastructure and applications to
              determine your readiness for cloud migration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudConsulting;
