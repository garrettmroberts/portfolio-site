import AboutMeSection from '../components/AboutMeSection/AboutMeSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import Navbar from '../components/Navbar/Navbar';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import Section from '../components/Section/Section';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <Section id="contact-section">Contact</Section>
      </main>
    </>
  );
};

export default Home;