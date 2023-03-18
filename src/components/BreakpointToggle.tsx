import React, { useState, useEffect } from 'react';

const BreakpointToggle = (WrappedComponent: any) => {
  const EnhancedComponent: React.FC<{props: object}> = (props) => {
    const [variant, setVariant] = useState('one');

    const handleVariant = () => {
      if (globalThis.window.innerWidth > 768) {
        setVariant('two');
      } else {
        setVariant('one');
      }
    };

    useEffect(() => {
      handleVariant();
      globalThis.window.addEventListener('resize', () => {
        handleVariant();
      });
    }, []);

    return (
      <WrappedComponent {...props} variant={variant} />
    );
  };

  return EnhancedComponent;
};

export default BreakpointToggle;
