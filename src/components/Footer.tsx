import React, { useState, useEffect, useContext } from 'react';
import styles from '@/styles/Footer.module.scss';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import socialLinks from '@/utils/socialLinks';
import { NavContext } from './NavContext';
import TextAnimation from './TextAnimation';

const Footer: React.FC<{}> = () => {
  const [year, setYear] = useState(0);
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className={`${styles.container} ${isNavOpen && styles.hidden}`}>
      <TextAnimation type="fade_down" delay={0} className={styles.link}>
        <a href="/resume.pdf" target='_blank' className={styles.resume_link}>
          <span className="span">Get my Resume</span>
          <BsArrowUpRightCircleFill />
        </a>
      </TextAnimation>
      <ul className={styles.solist}>
        {
          socialLinks.map((item, idx) => (
            <li key={item.link} className={styles.solist_item}>
              <TextAnimation type="fade_down" delay={0 + idx}>
                <a className={styles.solist_item_link} aria-label={item.label} href={item.link} target='_blank' rel="noreferrer">{item.icon}</a>
              </TextAnimation>
            </li>
          ))
        }
      </ul>
      <TextAnimation type="fade_down" delay={0} className={styles.copy}>
        <p>
        Made with <span className={styles.love}>&#10084;</span> by Jonathan Sivahera  • {year}
        </p>
      </TextAnimation>
    </footer>
  );
};

export default Footer;
