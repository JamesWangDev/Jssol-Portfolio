import React, { useContext, useEffect } from 'react';
import styles from '@/styles/About.module.scss';
import { NavContext } from './NavContext';

function Hero() {
  const { isNavOpen } = useContext(NavContext);

  return (
    <section id="services" className={`${styles.container} ${isNavOpen && styles.hidden}`}>About Section</section>
  );
}

export default Hero;
