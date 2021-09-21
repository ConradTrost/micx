import React from 'react';

const About = () => {
    return(
        <div className="rounded-3xl overflow-hidden lg:w-6/12 my-4 lg:my-0 lg:mr-4 card second-card">
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-600 text-center text-white text-2xl">
             <h3>About MICX</h3>
            </div>
            <div className="bg-white h-52 inner-card flex p-4">
                <p className="m-auto">MICX is a singer, songwriter, and audio engineer currently operating in Dallas, Texas. Studied under audio engineer Rick Rooney at Empire Sound Studio, learning the ins and outs of recording, mixing, and providing production/post-production services to clients in various genres.</p>
            </div>
        </div>
    )
}

export default About;