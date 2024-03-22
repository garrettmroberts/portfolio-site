import { NextPage } from 'next';
import AboutMeSection from '../components/AboutMeSection/AboutMeSection';
import ContactSection from '../components/ContactSection/ContactSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import Navbar from '../components/Navbar/Navbar';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ScrollTransition from '../components/ScrollTransition/ScrollTransition';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin']})

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main
        className={inter.className}
      >
        <ScrollTransition>
          <AboutMeSection />
        </ScrollTransition>
        <ScrollTransition>
          <ExperienceSection />
        </ScrollTransition>
        <ScrollTransition>
          <ProjectsSection />
        </ScrollTransition>
        <ScrollTransition>
          <ContactSection />
        </ScrollTransition>
      </main>
    </>
  );
};

export default Home;
