"use client";

import React, { useState } from "react";
import { GoPersonAdd } from "react-icons/go";
import { Person } from "~/assets/js/team-member-data";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


const TeamCard = (person: { person: Person }) => {
    const { name, position, image, linkedin, instagram, facebook } = person.person;
    const breakWord = name.split(' ');

    const [social, setSocial] = useState(false);

    const toggleSocial = () => {
        setSocial(!social);
    }

    return (
        <div className="bg-[#0f1219] px-4 py-6 rounded-xl max-w-[14rem] hover:shadow-md hover:shadow-green-400">
            <div className="font-inter">
                <div className="bg-[#151a21] rounded-xl flex justify-between gap-4 p-3">
                    <div className="flex flex-col">
                        {breakWord.map((word, index) => (
                            <span key={index}>{word}</span>
                        ))}
                    </div>
                    <img src={image} alt="team" className="rounded-xl w-20 h-20 object-cover" />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between items-center gap-4 relative">
                        <div className="flex flex-col items-center cursor-pointer group" onClick={() => toggleSocial()}>
                            <GoPersonAdd className="group-hover:text-green-400" />
                            <span className="text-[#66798a] text-xs group-hover:text-green-400">Follow</span>
                        </div>
                        {social && (
                            <div className="bg-[#e7e7e7] socials absolute -top-12 -left-[1.85rem] flex gap-2 p-2 rounded-md">
                                {linkedin !== '/' &&
                                    <a href={linkedin} target="_blank" className="text-blue-600 text-xl"><FaLinkedin /></a>
                                }
                                {
                                    instagram !== '/' &&
                                    <a href={instagram} target="_blank" className="text-blue-600 text-xl"><RiInstagramFill /></a>
                                }
                                {
                                    facebook !== '/' &&
                                    <a href={facebook} target="_blank" className="text-blue-600 text-xl"><FaFacebook /></a>
                                }
                            </div>
                        )}

                        <div className="">
                            <p className="text-[#66798a] text-end w-fit">{position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;