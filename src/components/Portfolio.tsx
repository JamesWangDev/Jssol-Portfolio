import React, { useContext, useEffect } from 'react';
import styles from '@/styles/Portfolio.module.scss';
import { NavContext } from './NavContext';

function Hero() {
  const { isNavOpen } = useContext(NavContext);

  return (
    <section id="portfolio" className={`${styles.container} ${isNavOpen && styles.hidden}`}>Portfolio Section</section>
  );
}

export default Hero;
