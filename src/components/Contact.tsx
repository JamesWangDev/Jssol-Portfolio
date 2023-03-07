import React, { useContext, useEffect } from 'react';
import styles from '@/styles/Portfolio.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import { NavContext } from './NavContext';
import BreakpointToggle from './BreakpointToggle';
import VisibilityToggle from './VisibilityToggle';

interface Props {
  componentRef: React.RefObject<HTMLElement>;
  variant: string;
  isVisible: boolean;
}

const Contact: React.FC<Props> = ({ componentRef, variant, isVisible }) => {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'contact');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="contact" className={`${styles.container} ${isNavOpen && styles.hidden}`}>Services Section</section>
  );
};

export default VisibilityToggle(BreakpointToggle(Contact));
