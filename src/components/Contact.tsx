import React, { useContext, useEffect } from 'react';
import styles from '@/styles/Portfolio.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import { NavContext } from './NavContext';
import BreakpointToggle from './BreakpointToggle';
import VisibilityToggle from './VisibilityToggle';

function Contact({ componentRef, variant, isVisible }) {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'contact');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="contact" className={`${styles.container} ${isNavOpen && styles.hidden}`}>Services Section</section>
  );
}

export default VisibilityToggle(BreakpointToggle(Contact));
