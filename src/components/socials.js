import React from 'react';

import { FaSoundcloud, FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";

const Socials = () => {
    return(
        <div className="rounded-3xl overflow-hidden md:w-6/12 my-4 md:my-0 md:ml-4 card">
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-600 text-center text-white text-2xl">
                <h3>Stay Updated</h3>
            </div>
            <div className="bg-white h-44 inner-card flex justify-center items-center">
                <a rel="noopener noreferrer" target="_blank" href="#soundcloud"><FaSoundcloud  /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/artist/6IrRgdLJO148S9gQ4FysZI?si=B1dNi-CESAaxeFmiAblO2w&dl_branch=1"><FaSpotify /></a>
                <a rel="noopener noreferrer" target="_blank" href="#instagram"><FaInstagram /></a>
                <a rel="noopener noreferrer" target="_blank" href="#youtube"><FaYoutube /></a>
            </div>
        </div>
    )
}

export default Socials;