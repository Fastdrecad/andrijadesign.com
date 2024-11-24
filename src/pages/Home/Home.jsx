import { motion } from "framer-motion";

import useDocumentTitle from "../../hooks/useDocumentTitle";

import About from "../../components/About/About";
import JsonLd from "../../components/common/SEO/JsonLd";
import SEO from "../../components/common/SEO/SEO";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import OtherProjects from "../../components/OtherProjects/OtherProjects";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  useDocumentTitle();

  return (
    <>
      <SEO
        title="About | Andrija Mićunović - Full Stack Developer"
        description="Discover more about Andrija Mićunović, a passionate full-stack developer creating engaging and accessible digital experiences."
        url="https://www.andrijadesign.com"
        siteName="Andrija Mićunović Full Stack Developer Portfolio"
        canonicalUrl="https://www.andrijadesign.com"
      />

      <JsonLd pageType="about" pageData={null} />

      <motion.section className="header">
        <Header />
      </motion.section>
      <motion.section id="about">
        <About />
      </motion.section>
      <section id="projects" className="projects">
        <Projects />
      </section>
      <section id="other-projects">
        <OtherProjects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
