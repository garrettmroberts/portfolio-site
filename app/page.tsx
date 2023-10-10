import AboutMeSection from '../components/AboutMeSection/AboutMeSection';
import ContactSection from '../components/ContactSection/ContactSection';
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
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
