import { NextPage } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '../../components/Navbar/Navbar';
import ResumeSection from '../../components/ResumeSection/ResumeSection';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin']})

const Home: NextPage = () => {
  return (
    <>
      <main
        className={inter.className}
      >
        <ResumeSection isOnHomePage={false} />
      </main>
    </>
  );
};

export default Home;
