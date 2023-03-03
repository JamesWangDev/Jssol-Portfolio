import React, { useContext, useEffect } from 'react';
import styles from '@/styles/Hero.module.scss';
import { NavContext } from './NavContext';

function Hero() {
  const { isNavOpen } = useContext(NavContext);

  return (
    <section id="hello" className={`${styles.container} ${isNavOpen && styles.hidden}`}>Hero Section</section>
  );
}

export default Hero;
