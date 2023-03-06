import React, { useState, useRef, useEffect } from 'react';

const VisibilityToggle = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
      const component = componentRef.current;
      const { window } = globalThis;
      const windowHeight = window.innerHeight;

      const getVisibleHeight = (el: HTMLElement): number => {
        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, windowHeight);
        return Math.abs(visibleBottom - visibleTop);
      };

      const handleScroll = () => {
        const componentHeight = getVisibleHeight(component);
        const isVisibleEnough = Math.floor((componentHeight / windowHeight) * 100) > 80;
        console.log(`isVisibleEnough: ${isVisibleEnough} \n componentHeight: ${componentHeight} \n windowHeight: ${windowHeight}`);
        setIsVisible(isVisibleEnough);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <WrappedComponent componentRef={componentRef} {...props} isVisible={isVisible} />
    );
  };

  return EnhancedComponent;
};

export default VisibilityToggle;
