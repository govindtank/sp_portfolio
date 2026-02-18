"use client";

import React from "react";
import { Experience_data } from "@/constants";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Experience = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 z-[20]"
            id="experience"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                PROFESSIONAL EXPERIENCE
            </h1>

            <div className="h-full w-full flex flex-col gap-10 px-10 max-w-[1200px]">
                {Experience_data.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
                        className="flex flex-col gap-3 p-6 rounded-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
                                <h3 className="text-xl text-[#b49bff]">{exp.company}</h3>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                                <span className="text-gray-400 font-medium">{exp.duration}</span>
                                <p className="text-gray-500 text-sm">{exp.location}</p>
                            </div>
                        </div>
                        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
