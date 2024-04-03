"use client";
import React from "react";
import projectDetails from "../components/projects";
import ProjectForm from "../components/projectForm";
import { motion } from "framer-motion";
import Link from "next/link";

function Projects() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll">
        <div className="container my-24 mx-auto md:px-6 ">
          <section className="mb-32 text-center">
            <h2 className="mb-12 pb-4 text-center text-6xl font-bold font-mono">
              My Works
            </h2>

            <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
              {projectDetails.map((item) => (
                <ProjectForm item={item} key={item.id} />
              ))}
            </div>
          </section>
        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-8xl">Do you have a project?</h1>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Front-end Developer and IT Support
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
