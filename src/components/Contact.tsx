import React, { useContext, useEffect } from 'react';
import styles from '@/styles/Contact.module.scss';
import { NavContext } from './NavContext';

function Hero() {
  const { isNavOpen } = useContext(NavContext);

  return (
    <section id="contact" className={`${styles.container} ${isNavOpen && styles.hidden}`}>Services Section</section>
  );
}

export default Hero;
