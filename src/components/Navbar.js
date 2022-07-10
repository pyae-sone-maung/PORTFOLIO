import React from "react";
import { Link } from "react-scroll";
import profile_pic from "../assets/images/Profile2.jpg";

const Navbar = () => {
    return (
        <div className="bg-gray-50 sticky top-0 z-50">
            <header>
                <div className="relative z-20 border-none bg-dark-sky">
                    <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-2">
                        <div className="flex items-center justify-between">
                            <div className="relative z-20">
                                <Link to="hero" spy={true} smooth={true} offset={-100} duration={700} className="flex items-center cursor-pointer" >
                                    <img src={profile_pic} alt="Logo" className="w-10 h-10 rounded-full" />
                                    <span className="ml-5 font-extrabold text-gray-50 text-2xl lg:text-xl">  PYAE SONE </span>
                                </Link>
                            </div>
                            <div className="flex items-center justify-end border-l border-blue-900 lg:border-l-0">
                                <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
                                <label htmlFor="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden" >
                                    <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                    <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                </label>

                                <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-dark-sky border-r border-blue-900 shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                        <ul className="px-10 pt-32 text-gray-50 text-xl lg:text-base font-bold space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                                            <li>
                                                <Link to="hero" spy={true} smooth={true} offset={-100} duration={700} className="group cursor-pointer relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0" >
                                                    <span className="relative group-hover:text-cyan-700"> Home </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="about" spy={true} smooth={true} offset={-80} duration={700} className="group cursor-pointer relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0" >
                                                    <span className="relative group-hover:text-cyan-700"> About </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="skills" spy={true} smooth={true} offset={-100} duration={700} className="group cursor-pointer relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0" >
                                                    <span className="relative group-hover:text-cyan-700"> Skills </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="projects" spy={true} smooth={true} offset={-100} duration={700} className=" cursor-pointer group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0" >
                                                    <span className="relative group-hover:text-cyan-700"> Projects </span>
                                                </Link>
                                            </li>
                                        </ul>

                                        <div className=" border-dotted border-t py-5 px-6 lg:border-t-0 lg:border-l lg:border-blue-700 lg:py-0 lg:pr-0 lg:pl-6 cursor-pointer">
                                            <Link to="contact" spy={true} smooth={true} offset={50} duration={700}>
                                                <div className="hidden lg:block w-60 h-12  lg:w-28 lg:h-10 rounded-full hover:hue-bg-color">
                                                    <p className="bg-blue-900 hover:bg-black px-20 lg:px-5 py-2 rounded-full text-white text-center font-bold uppercase lg:capitalize"> Contact </p>
                                                </div>
                                                <div className="lg:hidden hue-bg-color w-60 h-12  lg:w-28 lg:h-10 rounded-full grid place-items-center">
                                                    <p className="bg-black px-20 lg:px-5 py-2 hover:py-2 lg:hover:py-1 rounded-full text-white text-center font-bold uppercase lg:capitalize"> Contact </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
