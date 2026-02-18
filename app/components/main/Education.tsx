"use client";

import React from "react";
import { Education_data } from "@/constants";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Education = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 z-[20]"
            id="education"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                EDUCATION
            </h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center max-w-[1000px]">
                {Education_data.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInFromTop}
                        className="flex-1 p-6 rounded-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md text-center"
                    >
                        <h2 className="text-xl font-bold text-white">{edu.degree}</h2>
                        <h3 className="text-lg text-[#b49bff] mt-2">{edu.school}</h3>
                        <span className="text-gray-400 mt-2 block">{edu.duration}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
