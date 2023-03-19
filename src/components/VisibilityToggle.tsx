import React, {
  useState, useRef, useEffect, ReactElement,
} from 'react';

const VisibilityToggle = (WrappedComponent: any) => {
  const EnhancedComponent = (props: object) => {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
      const component = componentRef.current;
      const { window } = globalThis;
      const windowHeight = window.innerHeight;

      const getVisibleHeight = (el: any): number => {
        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, windowHeight);
        return visibleBottom - visibleTop;
      };

      const handleScroll = () => {
        const componentHeight = getVisibleHeight(component);
        const isVisibleEnough = Math.floor((componentHeight / windowHeight) * 100) > 80;
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
