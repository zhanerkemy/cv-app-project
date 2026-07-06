import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import Box from "../../components/Box";
import Info from "../../components/Info";
import TimeLine from "../../components/TimeLine";
import Expertise from "../../components/Expertise";
import Portfolio from "../../components/Portfolio";
import Address from "../../components/Address";
import Feedback from "../../components/Feedback";
import Skills from "../../components/Skills";

import { useCvData } from "../../hooks/useCvData";

import "./InnerPage.scss";

const InnerPage = () => {
  const { data } = useCvData();
  const [activeSection, setActiveSection] = useState("");

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  const scrollToTop = () => {
    setActiveSection("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout activeSection={activeSection} onNavigate={handleNavigate}>
      <section id="about">
        <Box title="About me">
          <Info text={data.about} />
        </Box>
      </section>

      <section id="education">
        <Box title="Education">
          <TimeLine data={data.education} />
        </Box>
      </section>

      <section id="experience">
        <Box title="Experience">
          <Expertise data={data.experience} />
        </Box>
      </section>

      <section id="skills">
        <Box>
            <div className="inner-page__section-header">
            <h2>Skills</h2>
            <Link className="inner-page__edit-button" to="/edit">
                Open edit
            </Link>
            </div>

            <Skills skills={data.skills} />
        </Box>
        </section>

      <section id="portfolio">
        <Box title="Portfolio">
          <Portfolio />
        </Box>
      </section>

      <section id="contacts">
        <Box title="Contacts">
          <Address {...data.contacts} />
        </Box>
      </section>

      <section id="feedback">
        <Box title="Feedback">
          <Feedback data={data.feedback} />
        </Box>
      </section>

      <button className="inner-page__top-button" onClick={scrollToTop} type="button">
        ↑
      </button>
    </Layout>
  );
};

export default InnerPage;