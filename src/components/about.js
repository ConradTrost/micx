import React from 'react';

const About = () => {
    return(
        <div className="rounded-3xl overflow-hidden md:w-6/12 my-4 md:my-0 md:mr-4 card">
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-600 text-center text-white text-2xl">
             <h3>About MICX</h3>
            </div>
            <div className="bg-white h-44 inner-card flex p-4">
                <p className="m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default About;