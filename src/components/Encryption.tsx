"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "./Motion"
import Image from "next/image";

const Encryption = () => {
    return (
        <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full bg-[#030014]">
            <div className="absolute w-auto h-auto top-0 z-[5] mt-20">
                <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    Security through
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
                        {" "}
                        Decentralized Network{" "}
                    </span>
                </motion.div>
                <motion.div
                    variants={slideInFromTop}
                    className="text-[20px] font-medium text-center text-gray-200"
                >
                    You have the
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
                        {" "}
                        private key
                        {" "}
                    </span>
                    to lock the network.
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto">
                <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                    <Image
                        src="/LockTop.png"
                        alt="Lock top"
                        width={50}
                        height={50}
                        className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
                    />
                    <Image
                        src="/LockMain.png"
                        alt="Lock Main"
                        width={70}
                        height={70}
                        className=" z-10"
                    />
                </div>

                <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
                    <h1 className="Welcome-text text-[12px]">Security</h1>
                </div>
            </div>


            <div className="w-full flex items-start justify-center absolute">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="w-full h-auto"
                    src="/encryption.webm/"
                />
            </div>
        </div>
    );
};

export default Encryption;