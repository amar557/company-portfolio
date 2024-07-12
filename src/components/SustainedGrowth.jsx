import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import like from "../assets/like.png";
import Frame from "../assets/Frame.svg";
function SustainedGrowth() {
  return (
    <div className="bg-secondary py-10 my-10">
      <div className="w-11/12 sm:w-10/12 flex text-center gap-4 flex-col items-center justify-center  mx-auto ">
        <ButtonSecondary text={"Sustained Growth"} img={like} />
        <img src={Frame} alt="" />
        <p>
          Over the past decade, we have maintained a double-digit growth rate,
          expanding our services, customer base, and global reach. This growth
          is a testament to our robust business model and our team’s dedication
          to pushing the boundaries of what is possible in IT services.
        </p>
        <p>
          Through our relentless pursuit of excellence and a client-centric
          approach, Ahyliz Technologies continues to set new standards in the IT
          industry, ensuring our clients are well-equipped to meet the
          challenges of the digital age.
        </p>
      </div>
    </div>
  );
}

export default SustainedGrowth;
