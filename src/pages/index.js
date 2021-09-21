import * as React from "react";
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';

import Player from '../components/player';
import Header from '../components/header';
import About from '../components/about';
import Socials from '../components/socials';

import "@fontsource/josefin-sans";
import "@fontsource/almarai";

import metaImg from '../icons/PFP_ALT.png'
import favicon from '../icons/MICX_LOGO.png';

// markup
const IndexPage = () => {


  React.useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    setTimeout(() => {
      document.getElementById('loading-wrapper').style.display = "none";
      document.querySelector('main').style.display = "block";
    }, 3000)
  }, [])


  return (
    <div className="outer-wrapper bg-black">
      <div id="loading-wrapper" className="loading-wrapper text-center">
        <div className="loading-inner-wrap flex flex-col justify-center h-full w-full items-center">
          <StaticImage placeholder="tracedSVG" className="w-8/12 md:w-4/12 loading-icon" src="../icons/MICX_LOGO.png" />
          <div className="title-container">
            <h1 className="text-white">
              <span>M</span>
              <span>I</span>
              <span>C</span>
              <span>X</span>
            </h1>
          </div>
        </div>
      </div>
      <main className="bg-gradient-to-tr to-yellow-300 via-red-500 from-red-700 w-screen min-h-screen">
        <Helmet>
          <title>MICX</title>
          <meta property="og:image" content={metaImg} />
          <meta name="twitter:image" content={metaImg} />
          <link rel="icon" href={favicon} />
        </Helmet>

        <Header />

      <div className="md:flex justify-center flex-col min-h-full p-8">
        <Player />
        <div className="lower lg:flex md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto justify-between my-6 my-0 md:mt-6">
          <About />
          <Socials />
        </div>
      </div>

      </main>
    </div>
  )
}

export default IndexPage
