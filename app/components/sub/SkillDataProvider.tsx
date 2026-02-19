"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    name: string;
}

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className="group relative flex flex-col items-center"
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt={name}
                title={name}
                unoptimized={src.endsWith('.svg')}
            />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 transition-all rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover:scale-100 z-50 whitespace-nowrap border border-[#7042f861]">
                {name}
            </span>

        </motion.div>
    )
}

export default SkillDataProvider