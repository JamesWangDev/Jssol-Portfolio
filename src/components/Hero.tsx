import React, { useContext, useEffect } from 'react';
import { NavContext } from './NavContext';
import styles from '@/styles/Hero.module.scss';

function Hero() {
  const { isNavOpen } = useContext(NavContext);

  return (
    <section id="hello" className={`${styles.container} ${isNavOpen && styles.hidden}`}>Hero Section</section>
  );
}

export default Hero;
