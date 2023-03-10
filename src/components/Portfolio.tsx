import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import styles from '@/styles/Portfolio.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import projects from '@/utils/projects';
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

const Portfolio: React.FC<Props> = ({ componentRef, variant, isVisible }) => {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'portfolio');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="portfolio" className={`${styles.container} ${isNavOpen && styles.hidden}`}>
      <TextAnimation className={styles.title_container} type="fade_right" delay={0}>
        <Title index='02' title='Portfolio' subtitle="My recent work" variant={variant} />
      </TextAnimation>
      <section className={styles.cards}>
        {projects.map((project, index) => (
          <TextAnimation className={styles[project.alias]} key={index} type="fade_down" delay={index * 0.1} threshold={0.1}>
            <div className={styles.card}>
              <Image src={project.image} alt={project.title} fill className={styles.image} />
              <div className={styles.content}>
                <div>
                  <p className={styles.title}>{project.title}</p>
                  <ul className={styles.stack}>
                    {project.stack.map((tech) => (
                      <li key={tech} className={styles.tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <TextAnimation className={styles.subtitle} type="fade_left" delay={2.5}>
                  {project.subtitle}
                </TextAnimation>
                <button type="button" className="button" aria-label="See more about the project">
                  <span className="sr-only">See this project</span>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </TextAnimation>
        ))}
      </section>
    </section>
  );
};

export default VisibilityToggle(BreakpointToggle(Portfolio));
