import { NextPage } from 'next';
import Navbar from '../../components/Navbar/Navbar';
import { Inter } from 'next/font/google';
import Section from '../../components/Section/Section';
import styles from './ResumeSection.module.css';

const inter = Inter({ subsets: ['latin']})

const Home: NextPage = () => {
  return (   
    <Section id="resume-section">
      <h2 className={styles.sectionHeader}>Resume</h2>
      <iframe src='/resume.pdf' className={styles.resume} />
    </Section>
  );
};

export default Home;
