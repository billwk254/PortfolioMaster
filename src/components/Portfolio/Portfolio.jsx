import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Dodge from "../../img/Dodge.png";
import Ecommerce from "../../img/ecommerce.png";
import printf from "../../img/Printf.png";
import Invasion from "../../img/Invasion.png";
import MusicApp from "../../img/musicapp.png";
import EventPlanner from "../../img/EP.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <a href="https://github.com/billwk254/Dodge_The_Ball">
        <SwiperSlide>
          <img class="img__img" src={Dodge} alt="" />
          <p class="img__description">Dodge the ball is a simple 2D game meant for everyone.
          The purpose of the game is to try and dodge the incoming balls while chasing a target
           on the screen for as long as possible.</p>
        </SwiperSlide>
        </a>
        <a href="https://github.com/billwk254/EVENT-PLANNER">
        <SwiperSlide>
          <img class="img__img" src={EventPlanner} alt="" />
          <p class="img__description">The app is a web-based application that allows users to plan and organize events.</p>
        </SwiperSlide>
        </a>
        <a href="https://github.com/billwk254/printf">
        <SwiperSlide>
          <img class="img__img" src={printf} alt="" />
          <p class="img__description">Recreating the printf function in C. The C Printf function works by passing a format string and a list of arguments. The format string contains placeholders, also known as format specifiers, for the values to be displayed. 
          The corresponding arguments contain the values to be placed inside the format specifiers.</p>
        </SwiperSlide>
        </a>
        <a href="https://github.com/billwk254/Alien_Invasion">
        <SwiperSlide>
          <img class="img__img" src={Invasion} alt="" />
          <p class="img__description">An Python game made with the library Pygame,
          It is an a 2D shooting game</p>
        </SwiperSlide>
        </a>
      </Swiper>
      </div>
  );
};

export default Portfolio;
