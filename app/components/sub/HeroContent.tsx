"use client";


import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { prefixPath } from '@/utils/path';

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-col lg:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:w-1/2'>

                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>Senior Mobile Application Developer (Kotlin | Flutter)</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-3xl md:text-4xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Govind Tank </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-sm md:text-base lg:text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    High-performance Senior Mobile Application Developer with 9+ years of experience architecting scalable Android (Kotlin/Java) and Cross-Platform (Flutter) solutions.
                    <br />
                    Specialized in Clean Architecture, MVVM/Bloc patterns, and modern UI toolkits like Jetpack Compose.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                    href='mailto:govindtank600@gmail.com'
                >
                    Let's Connect
                </motion.a>


            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center lg:w-1/2 mt-10 lg:mt-0'

            >
                <Image
                    src={prefixPath("/mainIconsdark.svg")}
                    alt="work icons"
                    height={300}
                    width={300}
                    className='w-full h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[650px]'
                />

            </motion.div>
        </motion.div>
    )
}

export default HeroContent;