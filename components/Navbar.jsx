"use client";
import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full absolute flex flex-row justify-center ">
      <div
        className={`nav  flex ${
          open && "flex-col"
        } md:flex-row gap-10 items-center p-5 rounded-4xl md:rounded-full mt-5 `}
      >
        <div className="title flex flex-row items-center gap-7 font-rubik text-white pr-2 text-xl">
          AuraFarmer.ai
          <span className=" md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="text-white h-5 w-5" />
            ) : (
              <FaBars className="text-white h-5 w-5" />
            )}
          </span>
        </div>
        <div className="font-Orbitron hidden md:flex  md:flex-row gap-5 text-slate-400 font-semibold text-lg">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
        {open && (
          <div className="font-Orbitron md:hidden flex  flex-col gap-5 text-slate-400 font-semibold text-lg">
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
