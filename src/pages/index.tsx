import React from 'react';
import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavProvider from '@/components/NavContext';
import styles from '@/styles/Home.module.scss';
import profile from '@/assets/profile.jpeg';

const Home = () => {
  const analyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-TPP11FR44F');
  `;

  return (
    <NavProvider>
      <Head>
        {/* Author meta tags info */}
        <meta name="author" content="Jonathan Sivahera" />

        {/* Open Graph meta tags info */}
        <meta property="og:title" content="Portfolio • Jonathan Sivahera" />
        <meta
          property="og:description"
          content="I'm a full-stack software developer passionate about creating top-quality software.
          Want to build a new product, feature, or website?
          I can help you achieve your goals. Check out my work and contact me if you like what you see!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.sivahera.tech/screenshot.png" />
        <meta name="og:image:alt" content="A headshot image of Jonathan Sivahera" />
        <meta property="og:url" content="https://www.sivahera.tech/" />
        <meta property="og:site_name" content="Portfolio • Jonathan Sivahera" />

        {/* Twitter meta tags info */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://www.sivahera.tech/screenshot.png" />
        <meta name="twitter:image:alt" content="A headshot image of Jonathan Sivahera" />
        <meta name="twitter:site" content="https://twitter.com/jsivahera" />
        <meta name="twitter:creator" content="@jsivahera" />
        <meta
          property="twitter:description"
          content="I'm a full-stack software developer passionate about creating top-quality software.
          Want to build a new product, feature, or website?
          I can help you achieve your goals. Check out my work and contact me if you like what you see!"
        />

        {/* Other meta tags info */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio • Jonathan Sivahera</title>
        <meta
          property="description"
          content="I'm a full-stack software developer passionate about creating top-quality software.
          Want to build a new product, feature, or website?
          I can help you achieve your goals. Check out my work and contact me if you like what you see!"
        />

        {/* Global site tag (gtag.js) - Google Analytics using Partytown web worker */}
        <Partytown debug={true} forward={['dataLayer.push']} />
        <script src="https://www.googletagmanager.com/gtag/js?id=G-TPP11FR44F" type="text/partytown" defer={true} />
        <script id="google-analytics" type="text/partytown" dangerouslySetInnerHTML={{ __html: analyticsScript }} defer={true} />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </main>
    </NavProvider>
  );
};

export default Home;
