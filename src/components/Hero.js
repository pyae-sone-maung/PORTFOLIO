import React from "react";
import profile_pic from "../assets/images/Profile1.jpg";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="py-3 lg:py-12 text-white bg-cover bg-center grid place-items-center" id="hero">
            <div className="absolute grid place-items-center lg:mt-24">
                <div className="inner-orbit drop-shadow-lg lg:left-36 absolute rounded-full w-60 h-60 -mt-28 border-dotted border-4 border-blue-300"> </div>
                <div className="middle-orbit drop-shadow-lg lg:left-28 lg:ml-2 absolute rounded-full w-72 h-72 -mt-28 border-dotted border-8 border-t-red-200 border-b-green-300 border-l-blue-200 border-r-yellow-300"></div>
                <div className="outer-orbit"> </div>
            </div>

            <div className="py-5 grid place-items-center lg:gap-x-52 lg:flex">
                <div className="hidden lg:block px-2">
                    <span className="text-3xl font-bold text-cyan-100 tracking-wide"> <span className="wave"> 👋 </span> Hello ! </span>
                    <br /> <br />
                    <span className="text-3xl font-bold text-cyan-100 ml-5"> I'm </span>
                    <span className="text-3xl font-bold"> Pyae Sone Maung </span>
                    <br /> <br />
                    <span className="text-2xl font-bold text-white tracking-wide ml-5"> Web Developer </span>
                    <br /> <br />
                    <div className="flex py-5 gap-x-4 ml-5">
                        <a href="https://www.facebook.com/PyaeSoneMaung45"> <FaFacebookSquare className="w-8 h-8 rounded-sm hover:hue-bg-color" /></a>
                        <a href="https://github.com/pyae-sone-maung"> <FaGithubSquare className="w-8 h-8 rounded-sm hover:hue-bg-color" /></a>
                        <a href="https://www.linkedin.com/"> <FaLinkedin className="w-8 h-8 rounded-sm hover:hue-bg-color" /> </a>
                    </div>
                </div>
                <div className="px-10 lg:-mt-4 mt-3 py-8 lg:py-0 lg:-ml-4">
                    <img src={profile_pic} alt="Profile" className="rounded-full w-52 h-52 border-collapse shadow-sm shadow-cyan-500/50" />
                </div>
            </div>

            <div className="grid place-content-center text-center lg:hidden">
                <p className="mt-1 text-3xl font-bold"> Pyae Sone Maung </p>
                <p className="mt-3 mb-2 text-2xl font-bold"> Web Developer </p>
                <div className="flex gap-x-3 place-content-center">
                    <a href="https://www.facebook.com/PyaeSoneMaung45"> <FaFacebookSquare className="w-8 h-8 rounded-sm hover:hue-bg-color" /> </a>
                    <a href="https://github.com/pyae-sone-maung"> <FaGithubSquare className="w-8 h-8 rounded-sm hover:hue-bg-color" /> </a>
                    <a href="https://www.linkedin.com/"> <FaLinkedin className="w-8 h-8 rounded-sm hover:hue-bg-color" /> </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
