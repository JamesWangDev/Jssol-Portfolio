import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Hero.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import socialLinks from '@/utils/socialLinks';
import { NavContext } from './NavContext';
import BreakpointToggle from './BreakpointToggle';
import VisibilityToggle from './VisibilityToggle';
import Title from './Title';

const Hero = ({ componentRef, variant, isVisible }) => {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'hello');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="hello" className={`${styles.container} ${isNavOpen && styles.hidden}`}>
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
};

export default VisibilityToggle(BreakpointToggle(Hero));
