import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
  id="home"
  className="text-gray-600 bg-darkblue body-font min-h-screen flex flex-col justify-between"
>
  <div className="flex flex-col items-center text-center flex-grow justify-center">
    <SocialHandles />
    <h2
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-once="false"
      className="title-font md:text-3xl text-2xl mb-4 font-medium text-white"
    >
      Hello, I am{" "}
      <span className="text-cyan">{ProfileData.name}</span>
    </h2>
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-once="false"
      className="text-3xl text-white mb-4 font-medium"
    >
      &nbsp;
      <Typewriter
        words={ProfileData.professions}
        loop={false}
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </div>
    {ProfileData.info?.map((item, index) => (
      <p
        key={index}
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-once="false"
        className="mb-2 text-white text-lg md:text-xl leading-relaxed"
      >
        {item}
      </p>
    ))}
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      data-aos-once="false"
      className="mt-4 flex gap-x-4 md:gap-x-5"
    >
      <button className="inline-flex font-medium text-white bg-black border-2 border-white py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={750}>
          Hire Me
        </Link>
      </button>
      <a href={ProfileData.resume} target="_blank" rel="noreferrer">
        <button className="inline-flex font-medium text-black bg-cyan border-2 border-black py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
          Get Resume
        </button>
      </a>
    </div>
  </div>

  <div className="w-full">
    <Wave />
  </div>
</section>

  );
};

export default Profile;
