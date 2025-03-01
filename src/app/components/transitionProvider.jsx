"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import MyFooter from "./myFooter";

function TransitionProvider({ children }) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 "
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0  text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] z-40 bottom-0 text-white"
          initial={{ height: "140vh" }}
          animate={{ height: "0", transition: { delay: 0.5 } }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-156px)]">{children}</div>
        <MyFooter />
      </div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
