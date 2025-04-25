/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import prjimgOne from '../assets/Project/3.png';
import prjimgTwo from '../assets/Project/1.png';
import prjimgThree from '../assets/Project/2.png';
import prjLogoOne from '../assets/Project/Project Company.png';
import prjLogoTwo from '../assets/Project/Project Company 2.png';
import prjLogoThree from '../assets/Project/Project Company 3.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const RecentPrj = () => {
  return (
    <div className="ProjectBoxM">
      <div className="HeadingBox">
        <div className="styleP">
          <span className="highlightDark">Portfolio</span>
          <span className="OutBoxtext">Shows Work</span>
        </div>
        <div className="HeadingText">
          <h1 className="HeaddingW">
            <span className="HeaddingB">Recents </span>work
          </h1>
          <p className="RecentWorkP">
            We invite you to explore the diverse range of challenges we&lsquo;ve
            tackled and the <br /> creative solutions we&apos;ve developed across various
            industries.
          </p>
        </div>
      </div>

      {/* Sticky Scroll Container */}
      <div className="sticky-scroll-wrapper">
        <ProjectBox
          imgOne={prjLogoOne}
          imgTwo={prjimgOne}
          projectDetails="Today’s brands struggle to deeply engage their communities, which is essential for unlocking."
          projectHeading="NTUC First Campus Responsive Design"
        />
        <ProjectBox
          imgOne={prjLogoTwo}
          imgTwo={prjimgTwo}
          projectDetails="Today’s brands struggle to deeply engage their communities, which is essential for unlocking."
          projectHeading="Healthcare Platform UI Redesign"
        />
        <ProjectBox
          imgOne={prjLogoThree}
          imgTwo={prjimgThree}
          projectDetails="Today’s brands struggle to deeply engage their communities, which is essential for unlocking."
          projectHeading="EdTech Dashboard for Admin Panel"
        />
      </div>
    </div>
  );
};

function ProjectBox({ imgOne, imgTwo, projectHeading, projectDetails }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      className="sticky-card"
      style={{ y }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="row">
        <div className="col-6">
          <div className="logo">
            <img src={imgOne} alt="Project logo" />
          </div>
          <div className="DetailsPrj">
            <h1 className="ProjectHeading">{projectHeading}</h1>
            <p className="ProjectDetails">{projectDetails}</p>
            <button className="animated-button book-call">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="text">Open Project</span>
            </button>
          </div>
        </div>
        <div className="col-6">
          <img
            style={{ height: '100%', width: '100%' }}
            src={imgTwo}
            alt="Project preview"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default RecentPrj;