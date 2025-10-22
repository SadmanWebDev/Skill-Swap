import React from "react";
import SwiperScrollbar from "../../components/SwiperScrollbar/SwiperScrollbar";
import PopularSkills from "../../components/PopularSkills/PopularSkills";
import TopProviders from "../../components/TopProvider/TopProvider";
import HowItWorks from "../../components/HowItWork/HowItWork";
import WhyChooseSkillSwap from "../../components/WhyChoseSkillSwap/WhyChoseSkillSwap";

const Home = () => {
  return (
    <div>
      <div className="">
        <SwiperScrollbar></SwiperScrollbar> 
      </div>
      <div className="">
        <PopularSkills></PopularSkills>
      </div>
      <div className="">
        \<TopProviders></TopProviders>
      </div>
      <div className="">
        <HowItWorks></HowItWorks>
      </div>
      <div className="">
        <WhyChooseSkillSwap></WhyChooseSkillSwap>
      </div>
    </div>
  );
};

export default Home;
