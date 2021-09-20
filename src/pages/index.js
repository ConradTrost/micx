import * as React from "react";
import { Helmet } from 'react-helmet';

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
  return (
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
      <div className="lower lg:flex md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto justify-between my-6">
        <About />
        <Socials />
      </div>
    </div>

    </main>
  )
}

export default IndexPage
