"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "./Motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-row items-center justify-center">
      <div className="absolute top-0 z-[5] mt-20 h-auto w-auto">
        <motion.div
          variants={slideInFromTop}
          className="text-center text-[40px] font-medium text-gray-200"
        >
          Security through
          <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Decentralized Network{" "}
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="text-center text-[20px] font-medium text-gray-200"
        >
          You have the
          <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            private key{" "}
          </span>
          to lock the network.
        </motion.div>
      </div>
      <div className="md:scale-1 relative mt-32 flex h-full min-h-screen w-full flex-row items-center justify-center overflow-x-clip">
        <div className="absolute z-[20] flex h-auto w-auto  flex-col items-center justify-center">
          <div className="group flex h-auto w-auto scale-[1.2] cursor-pointer flex-col items-center md:scale-100">
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={50}
              height={50}
              className="w-[50px]  translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            />
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={70}
              height={70}
              className=" z-10"
            />
          </div>

          <div className="Welcome-box brder z-[20] my-[20px] border-[#7042f88b] px-[15px] py-[4px] opacity-[0.9]">
            <h1 className="Welcome-text text-[12px]">Security</h1>
          </div>
        </div>

        <div className="absolute flex w-full items-start justify-center">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="s h-auto w-full scale-[2] md:scale-100"
            src="/encryption.webm/"
          />
        </div>
      </div>
    </div>
  );
};

export default Encryption;
