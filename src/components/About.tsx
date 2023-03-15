import React, { useContext, useEffect } from 'react';
import styles from '@/styles/About.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import { NavContext } from './NavContext';
import BreakpointToggle from './BreakpointToggle';
import VisibilityToggle from './VisibilityToggle';

interface Props {
  componentRef: React.RefObject<HTMLElement>;
  variant: string;
  isVisible: boolean;
}

const About: React.FC<Props> = ({ componentRef, variant, isVisible }) => {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'services');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="services" className={`${styles.container} ${isNavOpen && styles.hidden}`}>About Section</section>
  );
};

export default VisibilityToggle(BreakpointToggle(About));
