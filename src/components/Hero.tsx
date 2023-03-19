import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Hero.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import socialLinks from '@/utils/socialLinks';
import { NavContext } from './NavContext';
import BreakpointToggle from './BreakpointToggle';
import VisibilityToggle from './VisibilityToggle';
import TextAnimation from './TextAnimation';
import Title from './Title';

interface Props {
  componentRef: React.RefObject<HTMLElement>;
  variant: string;
  isVisible: boolean;
}

const Hero: React.FC<Props> = ({ componentRef, variant, isVisible }) => {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'hello');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="hello" className={`${styles.container} ${isNavOpen && styles.hidden}`}>
      <TextAnimation type="fade_right" delay={0}>
        <Title index='01' title='Jonathan Sivahera' subtitle="Hello, I'm" variant={variant} />
      </TextAnimation>
      <TextAnimation type="fade_down" delay={2}>
        <p className={styles.copy}>
          I&#39;m a <span className="highlight">full-stack software developer</span> passionate about creating top-quality software.
          <br />
          Want to build a new product, feature, or website?
          <br />
          I can help you <span className="highlight">achieve your goals.</span> Check out my work and contact me if you like what you see!
        </p>
      </TextAnimation>
      <section className={styles.links}>
        <TextAnimation type="fade_right" delay={3}>
          <Link className={styles.works_link} href="#portfolio">See my work</Link>
        </TextAnimation>
        <hr className={styles.line} />
          <ul className={styles.solist}>
            {
              socialLinks.map((item, idx) => (
                <li key={item.link} className={styles.solist_item}>
                  <TextAnimation type="fade_left" delay={4 + idx}>
                    <a className={styles.solist_item_link} href={item.link} aria-label={item.label} target='_blank' rel="canonical noreferrer">{item.icon}</a>
                  </TextAnimation>
                </li>
              ))
            }
          </ul>
      </section>
      <TextAnimation type="fade_left" className="blob" delay={0} />
    </section>
  );
};

export default VisibilityToggle(BreakpointToggle(Hero));
