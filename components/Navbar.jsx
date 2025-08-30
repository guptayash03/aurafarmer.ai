"use client";
import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full absolute flex flex-row justify-center ">
      <div
        className={`nav  flex ${
          open && "flex-col"
        } md:flex-row gap-10 items-center p-3 rounded-4xl md:rounded-full mt-5 `}
      >
        <div className="title flex flex-row items-center gap-7 font-rubik text-white pr-2 text-xl">
          AuraFarmer.ai
          <span
            className="md:hidden cursor-pointer relative w-6 h-6"
            onClick={() => setOpen(!open)}
          >
            <FaBars
              className={`absolute transition-all duration-300 ${
                open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
            />
            <FaTimes
              className={`absolute transition-all duration-300 ${
                open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            />
          </span>
        </div>
        <div className="font-Grotesk hidden md:flex  md:flex-row gap-5 text-slate-400 font-semibold text-lg">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            //  exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="font-Grotesk md:hidden flex flex-col gap-5 text-slate-400 font-semibold text-lg"
            >
              
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="hidden md:block">
          <button className="group  relative overflow-hidden p-2 rounded-3xl font-Grotesk text-sm text-white bg-gradient-to-b from-teal-400 to-emerald-600 transition-all duration-300 ease-in-out font-semibold">
            <span className="relative z-10 font-Grotesk">Get Started</span>
            <span className="absolute inset-0 bg-emerald-600 translate-y-full transition-transform duration-300 ease-in-out rounded-3xl  group-hover:translate-y-0"></span>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
