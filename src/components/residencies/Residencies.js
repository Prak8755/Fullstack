import React from "react";
import "./residencies.css";
import data from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { sliderSettings } from "../../utils/Common";

const residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="r-card flexColStart">
                <img src={item.image} alt='home'/>
                <span className="secondaryText r-price">
                    <span style={{color:'orange'}}>$ </span>
                    <span>{item.price}</span>
                </span>
                <span className="primaryText">{item.name}</span>
                <span className="secondaryText">{item.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default residencies;

const SliderButtons=()=>{
  const swiper=useSwiper();
  return (
    <div className="r-button flexCenter">
      <button onClick={()=>swiper.slidePrev()}>
&lt; </button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}
