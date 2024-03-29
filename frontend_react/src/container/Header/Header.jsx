import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },

};


const Header = () => {
const onButtonClick = () => {
    fetch('01_IRUOJE_FAITH_Resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = '01_IRUOJE_FAITH_Resume.pdf';
            alink.click();
        });
    });
  }
return (
  <>
     <div className="app__header ">
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="header__hero--heading w-full"
    >
        <h1><span>Making ideas turn into real life<span className='header_gradient'> products </span>
        what i love doing.</span></h1>
        <br></br>
  <div>
  <button className='header__hero--cta text-white text-sm' onClick={onButtonClick}>DOWNLOAD CV </button></div>
    </motion.div>
<motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles "
    >
      {[images.react, images.js, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
  </>
)};

export default AppWrap(Header, 'home');