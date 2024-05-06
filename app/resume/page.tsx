import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import ResumeSection from '../../components/ResumeSection/ResumeSection';

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
