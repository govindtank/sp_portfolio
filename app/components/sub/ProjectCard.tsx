"use client";

import Image from "next/image";
import React from "react";
import { prefixPath } from "@/utils/path";

interface Props {
  src: string;
  title: string;
  subtitle: string;
  tech: string;
  description: string;
  demoUrl?: string;
  demoText?: string;
}

const ProjectCard = ({ src, title, subtitle, tech, description, demoUrl, demoText }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full">
      <Image
        src={prefixPath(src)}
        alt={title}
        width={600}
        height={400}
        className="w-full object-contain"
        unoptimized={src.endsWith('.svg')}
      />

      <div className="relative p-4">
        <div className="space-y-2">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">{title}</h1>
          <div className="w-full h-0.5 bg-[#2A0E61]"></div>
        </div>
        <h3 className="text-base md:text-lg font-medium text-[#8b26eb] mb-2">{subtitle}</h3>
        <h2 className="text-sm md:text-base italic text-[#0AD3FF]">{tech}</h2>
        <p className="mt-2 text-sm md:text-base text-gray-300 whitespace-pre-line break-words">{description}</p>


        <div className="flex justify-center items-center gap-5">
          {/* Demo Button */}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 p-2 text-white hover:text-gray-300 bg-transparent border-2 rounded cursor-pointer"
            >
              {demoText || 'Demo'}
            </a>
          )}
        </div>

      </div>

    </div>

  );
};

export default ProjectCard;