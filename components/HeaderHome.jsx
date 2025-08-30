import React from "react";
// import "./HeaderHome.css";
import Image from "next/image";

const HeaderHome = () => {
  return (
    <div className="absolute w-[80%] flex flex-row justify-between items-center top-40 font-Orbitron">
      <div className="flex flex-col gap-2 w-[60%]">
        <div className="text-white text-5xl  font-bold leading-relaxed">
          <h1>
            {" "}
            Automate Social{" "}
            <span className="text-emerald-600">Presence with AI Agents</span>
          </h1>
        </div>
        <div className="font-Grotesk  mt-5 font-[900] text-xl leading-relaxed tracking-wider ">
          <p className="bg-gradient-to-r from-red-600 via-purple-400 to-pink-600 bg-clip-text text-transparent">
            {" "}
            Turn your ideas into engaging posts with AI agents that create,
            schedule, and publish consistently across platforms.
          </p>
        </div>
      </div>
      <div>
        {" "}
        <div className="w-48 h-16 mt-5">
          <Image src="/insta.webp" alt="icon" width={300} height={300}></Image>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
