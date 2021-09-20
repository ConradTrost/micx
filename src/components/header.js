import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { FaSoundcloud, FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";


const Header = () => {
    return(
        <header>
            <div className="w-full p-4 bg-gradient-to-r to-red-200 via-white from-white absolute top-0 left-0 flex justify-between items-center">
                <h3 className="w-2/12 text-3xl font-extrabold">MICX</h3>
                <StaticImage className="w-14" src="../icons/MICX_LOGO.png" />
                <div className="w-2/12 justify-center items-center hidden md:flex">
                    <a rel="noopener noreferrer" target="_blank" href="#soundcloud"><FaSoundcloud /></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/artist/6IrRgdLJO148S9gQ4FysZI?si=B1dNi-CESAaxeFmiAblO2w&dl_branch=1"><FaSpotify /></a>
                    <a rel="noopener noreferrer" target="_blank" href="#instagram"><FaInstagram /></a>
                    <a rel="noopener noreferrer" target="_blank" href="#youtube"><FaYoutube /></a>
                </div>
            </div>
        </header>
    )
}

export default Header;