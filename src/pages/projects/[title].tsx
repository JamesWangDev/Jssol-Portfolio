import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import TextAnimation from '@/components/TextAnimation';
import styles from '@/styles/Project.module.scss';
import projects from '@/utils/projects';
import formatURL from '@/utils/formatURL';

interface Props {
  project: {
    title: string;
    subtitle: string;
    description: string[];
    image: string;
    stack: string[];
    live: string;
    github: string;
  };
  nextTitle: string;
  prevTitle: string;
  idx: number;
  projectCount: number;
}

const Project: React.FC<Props> = ({
  project, nextTitle, prevTitle, idx, projectCount,
}) => {
  const {
    title,
    description,
    image,
    stack,
    live,
    github,
  } = project;

  return (
    <>
      <Head>
          <title>{title}</title>
          <meta name="description" content={description[0]} />
      </Head>
      <TextAnimation type='fade_up' delay={2.5} threshold={0.05}>
        <main className={styles.container}>
          <Link href="/#portfolio" className={styles.back_link}>
            <span className={styles.back} />
          </Link>
          <h2 className={styles.title}>{title}</h2>
          <section className={styles.content}>
            <div className={styles.image_container}>
              <Image
                src={image}
                alt={title}
                className={styles.image}
                priority
              />
            </div>
            <section className={styles.info_container}>
              <section className={styles.info}>
                <ul className={styles.stack}>
                  {stack.map((tech) => (
                    <li key={tech} className={styles.tech}>{tech}</li>
                  ))}
                </ul>
                {description.map((paragraph, index) => (
                  <p key={`para${index}`} className={styles.para}>{paragraph}</p>
                ))}
              </section>
              <section className={styles.links}>
                <a href={live} target='_blank' className={styles.link} rel="noreferrer">
                  <span className={styles.span}>See live</span>
                  <BsArrowUpRightCircleFill />
                </a>
                <a href={github} target='_blank' className={styles.link} rel="noreferrer">
                  <span className={styles.span}>See source</span>
                  <FaGithub />
                </a>
              </section>
            </section>
          </section>
          <section className={styles.nav}>
          <Link href={`/projects/${prevTitle}`} className={styles.nav_link}>
            <FaChevronLeft />
            <span className={styles.span}>Prev</span>
          </Link>
          <p className={styles.counter}>
            <span className={styles.idx}>0{idx + 1}</span>
            {' '}
            of 0{projectCount}
          </p>
          <Link href={`/projects/${nextTitle}`} className={styles.nav_link}>
            <span className={styles.span}>Next</span>
            <FaChevronRight />
          </Link>
          </section>
        </main>
      </TextAnimation>
    </>
  );
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { title: formatURL(project.title) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.filter((project) => formatURL(project.title) === params.title)[0];
  const idx = projects.indexOf(project);
  const projectCount = projects.length;
  let prevTitle;
  let nextTitle;
  if (idx === 0) {
    prevTitle = projects[projectCount - 1].title;
  } else {
    prevTitle = projects[idx - 1].title;
  }
  if (idx === (projectCount - 1)) {
    nextTitle = projects[0].title;
  } else {
    nextTitle = projects[idx + 1].title;
  }
  prevTitle = formatURL(prevTitle);
  nextTitle = formatURL(nextTitle);

  return {
    props: {
      project, prevTitle, nextTitle, idx, projectCount,
    },
  };
}

export default Project;
