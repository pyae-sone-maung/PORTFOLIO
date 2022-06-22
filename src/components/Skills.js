import React from "react";
import html from "../assets/logo/html.png";
import css from "../assets/logo/css.png";
import bootstrap from "../assets/logo/bootstrap.png";
import javascript from "../assets/logo/javascript.jpg";
import jquery from "../assets/logo/jquery.png";
import git from "../assets/logo/git.jpg";
import tailwind from "../assets/logo/tailwindcss.jpg";
import reactjs from "../assets/logo/react.png";
import nodejs from "../assets/logo/nodejs.png";
import expressjs from "../assets/logo/express.jpg";
import mongodb from "../assets/logo/mongodb.jpg";
import postgresql from "../assets/logo/postgresql.jpg";
import mysql from "../assets/logo/mysql.png";

const Skills = () => {
    return (
        <div className="py-10 grid place-content-center bg-green-300">
            <div className="px-0 mb-5">
                <p className="text-center text-xl font-bold uppercase">
                    {" "}
                    My Skills{" "}
                </p>
            </div>

            <div className="container grid grid-cols-4 place-content-center text-center text-xs font-bold w-screen space-y-5 lg:px-14 lg:text-sm">
                <div className="grid place-items-center mt-5 drop-shadow-lg">
                    <img
                        src={html}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> HTML </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={css}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> CSS </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={bootstrap}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> Bootstrap </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={javascript}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> JavaScript </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={jquery}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> jQuery </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={git}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> Git </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={tailwind}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> Tailwind </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={reactjs}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> React </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={expressjs}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> Express </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={nodejs}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> Node </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={mongodb}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> MongoDB </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={postgresql}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> PostgreSQL </p>
                </div>
                <div className="grid place-items-center drop-shadow-lg">
                    <img
                        src={mysql}
                        alt=""
                        className="w-14 h-14 rounded-lg mb-1"
                    />
                    <p> MySQL </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
