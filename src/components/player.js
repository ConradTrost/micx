import React from 'react';

import SpotifyPlayer from "../music/SpotifyPlayer";

const Player = () => {
    return(
        <div className="rounded-3xl overflow-hidden mx-auto w-7/12 card">
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-600 text-center text-white text-2xl">
                Listen to MICX
            </div>
            <div className="bg-white inner-card">
                <SpotifyPlayer
                    uri="spotify:user:Micx:playlist:6IrRgdLJO148S9gQ4FysZI"
                    size="large"
                    theme="white"
                    view="list"
                />
            </div>
        </div>
    )
}

export default Player;