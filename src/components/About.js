import React from "react";
import about_pic from "../assets/images/Me.jpg";

const About = () => {
    return (
        <div className="py-4 grid place-items-center bg-blue-200">
            <div className="flex lg:space-x-10">
                <div className="py-5 px-10 hidden lg:block">
                    <img
                        src={about_pic}
                        alt="Profile"
                        className="w-56 h-56 rounded-lg"
                    />
                </div>
                <dir className="px-0 text-center">
                    <p className="text-xl font-bold lg:text-left mb-4 uppercase">
                        {" "}
                        About Me{" "}
                    </p>
                    <p className="lg:text-justify">
                        {" "}
                        I am Pyae Sone Maung. I've got bachelor degree of <br />
                        computer science from the university of computer studies
                        sittway.
                    </p>
                </dir>
            </div>
        </div>
    );
};

export default About;
