import React from "react";
import Skill_Items from '../utils/skill-items'

const Skills = () => {
    return (
        <div className="py-14 grid place-content-center text-white" id="skills">
            <div className="px-0 mb-8 lg:mb-12 grid place-items-center lg:glassbg">
                <p className="text-center text-2xl font-bold uppercase underline-offset-8"> My Skills </p>
                <div className="w-40 mt-2 border-b-4 border-dotted lg:hidden"> </div>
            </div>

            <div className="container grid grid-cols-4 place-content-center text-center text-xs gap-x-8 gap-y-3 lg:gap-x-20  lg:text-sm">
                {Skill_Items.map(item => (
                    <div key={item.id} className="grid place-items-center">
                        <div className="skill-bg-color absolute w-14 h-14 -mt-6 lg:-mt-7 rounded-md lg:w-14 lg:h-14"> </div>
                        <img src={item.icon} alt={item.name} className="w-12 h-12 z-10 rounded-md lg:w-12 lg:h-12" />
                        <p className="mt-2 font-bold lg:font-normal"> {item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
