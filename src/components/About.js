import React from "react";
import about_pic from '../assets/images/Profile2.jpg'

const About = () => {
    return (
        <div className="py-4 mt-5 lg:mt-0 grid place-content-center" id="about">
            <div className="container py-5 grid lg:grid-cols-2 lg:place-content-center glassbg drop-shadow-lg">
                <div className="py-5 mx-auto hidden lg:block">
                    <img src={about_pic} alt="Profile" className="w-56 h-56 about-pic" />
                </div>
                <div className="px-0 lg:-ml-16 lg:mt-2 text-center text-white drop-shadow">
                    <p className="text-2xl font-bold lg:text-left lg:px-5 mb-4 uppercase"> About Me </p>
                    <p className="px-5 text-justify">
                        I am Pyae Sone Maung. I've got a bachelor degree of
                        computer science from the University Of Computer
                        Studies, Sittway. I am very interested in web
                        application development. I have been three months
                        intership as a junior web developer at BEE Data Myanmar
                        Software Solutions, MICT Park, Yangon.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
