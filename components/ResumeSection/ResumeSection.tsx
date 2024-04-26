import { NextPage } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Section from '../../components/Section/Section';
import styles from './ResumeSection.module.css';

const inter = Inter({ subsets: ['latin']})

const ResumeSection: NextPage<{ isOnHomePage?: boolean }> = ({ isOnHomePage=true }) => {
  return (   
    <Section id="resume-section">
      <h2 className={styles.sectionHeader}>Resume</h2>
      {!isOnHomePage && (
        <h3 className={styles.subtext}>Want to see more? Check out my full portfolio site <Link href='/' className={styles.link}>HERE</Link>.</h3>
      )}
      <iframe src='/resume.pdf' className={styles.resume} />
    </Section>
  );
};

export default ResumeSection;
