import ButtonSecondary from "./ButtonSecondary";
import like from "../assets/like.png";
import Illustration1 from "../assets/Illustration1.svg";
import Illustration2 from "../assets/Illustration2.svg";
import HeadingPrimary from "./HeadingPrimary";
const projectsD = [
  {
    img: Illustration1,
    heading: "Digital Transformation for a Major Retailer",
    paras: [
      "Led a complete digital overhaul for a leading retail chain, integrating advanced AI and IoT technologies that resulted in a 40% increase in operational efficiency and significantly improved customer experiences.",
      "Cloud Migration for a Financial Institution: Executed a seamless transition of critical data and operations to a secure cloud environment for a multinational bank, enhancing their data security and operational scalability.",
      "Innovative Software Solutions: Developed a suite of proprietary software tools that have become benchmarks in the industry. ",
    ],
  },
  {
    img: Illustration2,
    heading: "Community Engagement and CSR",
    paras: [
      "Ahyliz Technologies' commitment to giving back to the community extends beyond mere words, as evidenced by its proactive engagement in various Corporate Social Responsibility (CSR) projects. ",
      "These initiatives are carefully designed to make a tangible impact, particularly in underprivileged areas where access to education and technology is limited.",
    ],
  },
];
function SProjects() {
  return (
    <div className="sm:w-10/12 w-11/12 mx-auto my-10">
      <div className="flex flex-col text-center items-center justify-center">
        <ButtonSecondary text={"Significant Projects"} img={like} />
        <HeadingPrimary>Innovating Every Field of Work</HeadingPrimary>
        <p>
          Through our relentless pursuit of excellence and a client-centric
          approach, Ahyliz Technologies continues to set new standards in the IT
          industry, ensuring our clients are well-equipped to meet the
          challenges of the digital age.
        </p>
      </div>
      <div className="my-8 space-y-5">
        {projectsD.map((project, i) => (
          <div
            className="flex  md:flex-row flex-col items-start justify-center gap-4"
            key={i}
          >
            <img
              src={project.img}
              className="md:w-1/2 w-full xmd:w-[475px] h-[311.58px] object-contain"
              alt=""
            />
            <div className="space-y-5">
              <h2 className="text-lg font-semibold">{project.heading}</h2>
              {project.paras.map((para, i) => (
                <p className="text-sm" key={i}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SProjects;
