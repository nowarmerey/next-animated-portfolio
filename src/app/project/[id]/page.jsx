"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import projectDetails from "../../components/projects";

function Project() {
  const params = useParams();
  const [photoID, setPhotoID] = useState(0);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll no-scrollbar ">
        {/* Images */}
        {/* images container */}
        <div className="flex flex-col justify-center items-center p-20 gap-4 ">
          <div className="">
            {!projectDetails[params.id - 1].video && (
              <Image
                className="border rounded-xl shadow-2xl"
                src={`/${projectDetails[params.id - 1].title}/${
                  projectDetails[params.id - 1].images[photoID]
                }.png`}
                width={1000}
                height={1000}
                alt=""
              />
            )}
            {projectDetails[params.id - 1].video && (
              <video
                src={`/${projectDetails[params.id - 1].title}/${
                  projectDetails[params.id - 1].images[0]
                }.mp4`}
                controls
              ></video>
            )}
          </div>
          <div className="flex flex-row gap-2 justify-center items-center  max-sm:hidden sm:w-[100px] sm:h-[50px] md:h-[100px] md:w-[130px] lg:h-full lg:w-full ">
            {projectDetails[params.id - 1].images.map((item, index) => (
              <Image
                src={`/${projectDetails[params.id - 1].title}/${
                  projectDetails[params.id - 1].images[item - 1]
                }.png`}
                className="border rounded-xl cursor-pointer shadow-2xl "
                alt=""
                width={200}
                height={200}
                key={index}
                onClick={() => setPhotoID(index)}
              />
            ))}
          </div>
          <p className="xl:text-2xl pt-4  font-sc font-bold max-sm:text-sm sm:text-lg md:text-xl m:px-8 md:px-12 lg:px-20 xl:px-48">
            {projectDetails[params.id - 1].desc}
          </p>
        </div>
        {/* Text */}
        <div className="relative items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 font-sc">
          <div className="absolute w-[4px] h-full bg-slate-600  "></div>
          <p className="p-5   font-bold  italic md:text-md md:leading-[50px] lg:text-lg lg:leading-[50px] xl:text-xl xl:leading-[50px]  ">
            Key Features:
          </p>
          <div
            className="p-5   leading-[50px] md:text-md md:leading-[50px] lg:text-lg lg:leading-[50px] xl:text-xl xl:leading-[50px]   "
            dangerouslySetInnerHTML={{
              __html: projectDetails[params.id - 1].keyFeatures
                .split(".")
                .join("<br/>"),
            }}
          ></div>
          <p className="p-5   font-bold  italic md:text-md md:leading-[50px] lg:text-lg lg:leading-[50px] xl:text-xl xl:leading-[50px]  ">
            Technical Details:
          </p>
          <div
            className="p-5   leading-[50px] md:text-md md:leading-[50px] lg:text-lg lg:leading-[50px] xl:text-xl xl:leading-[50px]   "
            dangerouslySetInnerHTML={{
              __html: projectDetails[params.id - 1].technicalDetails
                .split(".")
                .join("<br/>"),
            }}
          ></div>
        </div>
        <div className="py-10 flex items-center justify-center gap-4 font-sc">
          <a
            href={projectDetails[params.id - 1].demo}
            className="font-sc text-2xl border border-b-1 border-b-black font-bold hover:text-gray-500 hover:border-b-gray-500"
            target="_blank"
          >
            Demo
          </a>
          <a
            href={projectDetails[params.id - 1].github}
            className="font-sc text-2xl border border-b-1 border-b-black font-bold hover:text-gray-500 hover:border-b-gray-500"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="h-[2] w-full bg-slate-600"></div>

        {/* another projects */}
        <div className=""></div>
      </div>
    </motion.div>
  );
}

export default Project;
