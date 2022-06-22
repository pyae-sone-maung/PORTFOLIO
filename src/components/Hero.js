import React from "react";
import profile_pic from "../assets/images/Me.jpg"
import {FaFacebookSquare, FaGithubSquare,FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className="py-2 lg:py-10 bg-gray-100 grid place-items-center">
           <div className="py-5 grid place-items-center lg:space-x-48 lg:flex">
               <div className="hidden lg:block mt-1 px-10">
                    <span className="text-2xl text-blue-700 font-bold drop-shadow-lg" > Hi There, </span> <br /> <br />
                    <span className="text-2xl text-blue-700 font-bold drop-shadow-md" > I'm </span>
                    <span className="text-2xl text-yellow-400 font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-600"> Pyae Sone Maung </span> <br />
                    <span className="mt-5 text-xl font-bold text-sky-600"> I'm a Web Developer </span>
                    <br />
                    <button className="px-5 py-1 mt-5 text-white font-bold rounded-full bg-blue-800 "> Download CV </button>
                    <div className="flex py-5 space-x-4">
                        <a href="www.google.com"> <FaFacebookSquare className="w-8 h-8"/> </a>
                        <a href="www.google.com"> <FaGithubSquare className="w-8 h-8"/> </a>
                        <a href="www.google.com"> <FaLinkedin className="w-8 h-8"/> </a>
                    </div>
               </div>
               <div className="px-10 lg:-mt-5">
                    <img src={profile_pic} alt="Profile" className="rounded-full w-52 h-52 border-collapse shadow-lg shadow-cyan-500/50" />          
               </div>
           </div>

           <div className="px-10 text-center lg:hidden">
               <p className="mt-1 text-2xl text-blue-600 font-bold drop-shadow-md"> Pyae Sone Maung </p>
               <p className="mt-3 mb-2 text-xl text-sky-700 font-bold" > Web Developer </p>
               <div className="flex space-x-5 place-content-center">
                    <a href="www.google.com"> <FaFacebookSquare className="w-8 h-8"/> </a>
                    <a href="www.google.com"> <FaGithubSquare className="w-8 h-8"/> </a>
                    <a href="www.google.com"> <FaLinkedin className="w-8 h-8"/> </a>
               </div>
           </div>
        </div>
    );
};

export default Hero;
