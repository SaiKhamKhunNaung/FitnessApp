import React from 'react';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import './Hero.css';
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  
  return (
    <div className='hero' id='hero'>

        <div className="blur hero-blur"></div>

      {/* .........hero leftside......... */}
      <div className="left-h">

        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: '8px' }}
            transition={{...transition,type:'tween'}}
          >
          </motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>In Here We Will Help You To Shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* figure */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+'/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={948} start={780} delay='4' preFix='+' />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay='4' preFix='+' />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>

      </div>
      
      {/* .........hero rightside.......... */}
      <div className="right-h">

        <button className='btn'>Join Now</button>

        <motion.div
          whileInView={{ right: '4rem' }}
          initial={{right:'-1rem'}}
          transition={transition}
          className="heart-rate"
        >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span> 116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} className="hero-image" alt="" />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back}
          className="hero-image-back"
          alt=""
        />

        {/* calories */}

        <motion.div
          whileInView={{ right: '28rem'}}
          initial={{right:'37rem'}}
          transition={transition}
          className="calories">
          <img src={Calories} alt="" />
          <div >
            <span>Calories/Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default hero
