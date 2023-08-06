import React from "react";
import './hero.css';
import CountUp from "react-countup";
import { motion } from "framer-motion";





const Hero = () => {
  return (
   <section className="hero-wrapper">
<div className="hero-container paddings flexCenter innerWidth">
<div className="hero-left flexColStart">
<div className="hero-title">
<div className="orange-title"></div>
  <motion.h1 initial={{y:'4rem',opacity:0}} animate={{y:0,opacity:1}} transition={{duration:3,type:"spring"}}>Discover <br/>your all<br/> property here</motion.h1>
  
</div>
<div className="hero-desc flexColStart">
  <span className="secondaryText">All kind of property is sold here. You just need to make your decision.</span>
  <span className="secondaryText">All kind of property is sold here. You just need to make your decision.</span>
</div>
<div className="search-bar flexCenter">
<input type='text' className=""/>
<button className="button"> search</button>
</div>

<div className="stats flexCenter">
  <div className="stat flexColCenter">
    <span>
      <CountUp start={1000} end={5000} duration={4}/>
      <span>+</span>
    </span>
    <span className="secondaryText">Happy Customers</span>
  </div>

  <div className="stat flexColCenter">
    <span>
      <CountUp start={4000} end={8000} duration={4}/>
      <span>+</span>
    </span>
    <span className="secondaryText">Award Winning</span>
  </div>

  <div className="stat flexColCenter">
    <span>
      <CountUp end={49}/>
      <span>+</span>
    </span>
    <span className="secondaryText">Potential client</span>
  </div>
</div>
</div>

{/* Right side */}
<div className="hero-right flexCenter ">
<motion.div initial={{x:'7rem',opacity:0}} animate={{x:0,opacity:1}} transition={{duration:3,type:'spring'}} className="image-container">
  <img src='https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/07/full/1599422999-3507.jpg' alt='section'/>
</motion.div>
</div>
</div>
   </section>
  );
};

export default Hero;
