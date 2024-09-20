import { motion } from 'framer-motion';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Header from '../components/header/Header';
import OtherProjects from '../components/other-projects/OtherProjects';
import Projects from '../components/projects/Projects';

const Home = () => {
  return (
    <>
      <motion.section className='header'>
        <Header />
      </motion.section>
      <motion.section id='about'>
        <About />
      </motion.section>
      <section id='projects' className='projects'>
        <Projects />
      </section>
      <section id='other-projects'>
        <OtherProjects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </>
  );
};

export default Home;
