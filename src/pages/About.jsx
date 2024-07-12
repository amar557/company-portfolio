import AboutAboutUs from "../components/AboutAboutUs";
import ClientsEx from "../components/ClientsEx";
import OurAchievMents from "../components/OurAchievMents";
import OurMission from "../components/OurMission";
import OurStory from "../components/OurStory";
import OurTeam from "../components/OurTeam";
import Questions from "../components/Questions";
import SProjects from "../components/SProjects";
import SustainedGrowth from "../components/SustainedGrowth";
import WhyUs from "../components/WhyUs";

function About() {
  return (
    <>
      <AboutAboutUs />
      <OurMission />
      <OurStory />
      <OurTeam />
      <WhyUs />
      <OurAchievMents />
      <SProjects />
      <SustainedGrowth />
      <ClientsEx />
      <Questions />
    </>
  );
}

export default About;
