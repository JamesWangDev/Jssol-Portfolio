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

const Portfolio: React.FC<Props> = ({ componentRef, variant, isVisible }) => {
  const { isNavOpen } = useContext(NavContext);

  useEffect(() => {
    autoVisibilityToggler(isVisible, 'portfolio');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="portfolio" className={`${styles.container} ${isNavOpen && styles.hidden}`}>
      Portfolio section
    </section>
  );
};

export default VisibilityToggle(BreakpointToggle(Portfolio));
