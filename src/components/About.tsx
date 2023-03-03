import React, { useContext, useEffect } from 'react';
import { NavContext } from './NavContext';
import styles from '@/styles/About.module.scss';

function Hero() {
  const { isNavOpen } = useContext(NavContext);

  return (
    <section id="services" className={`${styles.container} ${isNavOpen && styles.hidden}`}>About Section</section>
  );
}

export default Hero;
