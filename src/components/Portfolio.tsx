import React, { useContext, useEffect } from 'react';
import styles from '@/styles/Portfolio.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
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

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    image: '/images/project-1.png',
    live: '',
    github: '',
    alias: 'one',
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    image: '/images/project-1.png',
    live: '',
    github: '',
    alias: 'two',
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    image: '/images/project-1.png',
    live: '',
    github: '',
    alias: 'three',
  },
  {
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    image: '/images/project-1.png',
    live: '',
    github: '',
    alias: 'four',
  },
  {
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    image: '/images/project-1.png',
    live: '',
    github: '',
    alias: 'five',
  },
  {
    title: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
    image: '/images/project-1.png',
    live: '',
    github: '',
    alias: 'six',
  },
];

const Portfolio: React.FC<Props> = ({ componentRef, variant, isVisible }) => {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'portfolio');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="portfolio" className={`${styles.container} ${isNavOpen && styles.hidden}`}>
      <section className={styles.title_container}>
        <TextAnimation type="fade_right" delay={0}>
          <Title index='02' title='Portfolio' subtitle="My recent work" variant={variant} />
        </TextAnimation>
      </section>
      <section className={styles.cards}>
        {projects.map((project, index) => (
          <TextAnimation className={styles[project.alias]} key={index} type="fade_down" delay={index * 0.1} threshold={0.25}>
            <div className={styles.card}>
              {project.title}
            </div>
          </TextAnimation>
        ))}
      </section>
    </section>
  );
};

export default VisibilityToggle(BreakpointToggle(Portfolio));
