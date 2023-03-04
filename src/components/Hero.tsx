import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import {
  FaGithub, FaLinkedin, FaAngellist, FaTwitter, FaMediumM,
} from 'react-icons/fa';
import styles from '@/styles/Hero.module.scss';
import { NavContext } from './NavContext';
import BreakpointToggle from './BreakpointToggle';
import Title from './Title';

const socialLinks = [
  {
    icon: <FaGithub />,
    link: 'https://github.com/jssol',
  },
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/jsivahera/',
  },
  {
    icon: 'OK',
    link: 'https://remoteok.com/@jsivahera',
  },
  {
    icon: <FaAngellist />,
    link: 'https://angel.co/u/jsivahera',
  },
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/jsivahera',
  },
  {
    icon: <FaMediumM />,
    link: 'https://medium.com/@josivahera',
  },
];

function Hero({ variant }) {
  const { isNavOpen } = useContext(NavContext);

  return (
    <section id="hello" className={`${styles.container} ${isNavOpen && styles.hidden}`}>
      <Title index='01' title='Jonathan Sivahera' subtitle="Hello, I'm" variant={variant} />
      <p className={styles.copy}>
        I&#39;m a <span className="highlight">full-stack software developer</span> passionate about creating top-quality software.
        <br />
        Want to build a new product, feature, or website?
        <br />
        I can help you <span className="highlight">achieve your goals.</span> Check out my work and contact me if you like what you see!
      </p>
      <section className={styles.links}>
        <Link className={styles.works_link} href="#portfolio">See my work</Link>
        <hr className={styles.line} />
        <ul className={styles.solist}>
          {
            socialLinks.map((item) => (
              <li key={item.link} className={styles.solist_item}>
                <Link className={styles.solist_item_link} href={item.link} target='_blank'>{item.icon}</Link>
              </li>
            ))
          }
        </ul>
      </section>
      <div className="blob" />
    </section>
  );
}

export default BreakpointToggle(Hero);
