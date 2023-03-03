import React, { useContext, useEffect } from 'react';
import { NavContext } from './NavContext';
import styles from '@/styles/Contact.module.scss';

function Hero() {
  const { isNavOpen } = useContext(NavContext);

  return (
    <section id="contact" className={`${styles.container} ${isNavOpen && styles.hidden}`}>Services Section</section>
  );
}

export default Hero;
