import React, { useContext, useEffect } from 'react';
import styles from '@/styles/Portfolio.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import { NavContext } from './NavContext';
import BreakpointToggle from './BreakpointToggle';
import VisibilityToggle from './VisibilityToggle';

function About({ componentRef, variant, isVisible }) {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'services');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="services" className={`${styles.container} ${isNavOpen && styles.hidden}`}>About Section</section>
  );
}

export default VisibilityToggle(BreakpointToggle(About));
