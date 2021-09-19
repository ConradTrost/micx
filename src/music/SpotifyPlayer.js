/**
  * Spotify player iframe widget
  *
  * @author Alexander Wallin <office@alexanderwallin.com>
  * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
  */

 import React, { Component } from "react"

 // Size presets, defined by Spotify
 const sizePresets = {
   large: {
     width: 300,
     height: 380,
   },
   compact: {
     width: 300,
     height: 80,
   },
 }

 /**
 * SpotifyPlayer class
 */
 class SpotifyPlayer extends Component {
   // ------------------------------------------------------
   // Render
   // ------------------------------------------------------

   render() {
     // const { uri, view, theme } = this.props
     let { size } = this.props

     if (typeof size === `string`) {
       size = sizePresets[size]
     }

     return (

       <iframe title="Spotify" 
               src="https://open.spotify.com/embed/artist/6IrRgdLJO148S9gQ4FysZI?si=B1dNi-CESAaxeFmiAblO2w&dl_branch=1" 
               width="100%" height="250" overflow="scroll" frameborder="0" allowtransparency="true" theme="white" 
               allow="encrypted-media">
       </iframe>      
     )
   }
 }

 export default SpotifyPlayer