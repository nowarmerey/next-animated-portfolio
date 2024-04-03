"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 lg:px-20 xl:px-48">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2  relative ">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text container */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Passionate and Creative front-end developer
          </h1>
          {/* Desc */}
          <p className="md:text-xl">
            Welcome to my personal website! I am a web developer and technical
            support engineer.I look forward to supporting and helping you
            achieve your technical goals
          </p>
          {/* Buttons */}
          <div className="flex gap-4 w-full">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white "
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-lg ring-1 ring-black "
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
