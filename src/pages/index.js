import * as React from "react";
import { Helmet } from 'react-helmet';

import Player from '../components/player';
import Header from '../components/header';
import About from '../components/about';
import Socials from '../components/socials';

// markup
const IndexPage = () => {
  return (
    <main className="bg-gradient-to-tr to-yellow-300 via-red-500 from-red-700 w-screen h-screen">
      <Helmet>
        <title>MicX</title>
      </Helmet>

      <Header />

    <div className="flex justify-center flex-col h-full">
      <Player />
      <div className="lower flex w-7/12 mx-auto justify-between my-6">
        <About />
        <Socials />
      </div>
    </div>

    </main>
  )
}

export default IndexPage
