import React, { useContext } from 'react';
import { NavContext } from './NavContext';
import styles from '@/styles/Hero.module.scss';

function Hero() {
  const { isNavOpen } = useContext(NavContext);

  return (
    <section className={`${styles.container} ${isNavOpen && styles.hidden}`}>Hero Section</section>
  );
}

export default Hero;
