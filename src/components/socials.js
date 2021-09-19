import React from 'react';

import { FaSoundcloud, FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";

const Socials = () => {
    return(
        <div className="rounded-3xl overflow-hidden w-6/12 ml-4 card">
            <div className="p-4 bg-gradient-to-r from-gray-800 via-gray-600 to-red-300 text-center text-white text-2xl">
                Stay Updated
            </div>
            <div className="bg-white h-40 inner-card flex justify-center items-center">
                <a href="#soundcloud"><FaSoundcloud  /></a>
                <a href="#spotify"><FaSpotify /></a>
                <a href="#instagram"><FaInstagram /></a>
                <a href="#youtube"><FaYoutube /></a>
            </div>
        </div>
    )
}

export default Socials;