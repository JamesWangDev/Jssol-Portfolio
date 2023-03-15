import React, { useContext, useEffect } from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import styles from '@/styles/About.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import Link from 'next/link';
import skills from '@/utils/skills';
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

const About: React.FC<Props> = ({ componentRef, isVisible }) => {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'services');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="services" className={`${styles.container} ${isNavOpen && styles.hidden}`}>
      <section className={styles.about}>
        <TextAnimation className={styles.title_container} type="fade_right" delay={0}>
          <Title index='03' title='About me' subtitle="Know more" variant='one' className={styles.title} />
        </TextAnimation>
        <TextAnimation className={styles.about_me} type="fade_down" delay={0}>
          <p>
            Hi! I&#39;m a developer passionate about creating user-friendly interfaces.
            With a background in electronics,
            I&#39;ve honed my problem-solving and creativity skills.
            <br />
            As a certified developer from Microverse, an online software school,
            I&#39;ve worked with developers worldwide,
            sharpening my communication and teamwork skills.
          </p>
        </TextAnimation>
        <TextAnimation type="fade_down" delay={0}>
          <Link href="/resume" className={styles.resume_link}>
            <span className="span">View my Resume</span>
            <BsArrowUpRightCircleFill />
          </Link>
          <Link className={`button ${styles.button}`} href='/#contact'>
            Start collaboration
          </Link>
        </TextAnimation>
      </section>
      <section className={styles.skills}>
        {
          skills.map((skill, index) => (
            <TextAnimation key={skill.name} className={styles.skill} type="fade_right" delay={index * 0.1} threshold={0.25}>
              <div className={styles.icon}>{skill.icon}</div>
              <h6 className={styles.name}>{skill.name}</h6>
              <ul className={styles.list}>
                {
                  skill.list.map((item, index) => (
                    <li className={styles.item} key={`${item}${index}`}>{item}</li>
                  ))
                }
              </ul>
            </TextAnimation>
          ))
        }
      </section>
    </section>
  );
};

export default VisibilityToggle(BreakpointToggle(About));
