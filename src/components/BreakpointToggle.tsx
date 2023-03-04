import React, { useState, useEffect } from 'react';

const BreakpointToggle = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const [variant, setVariant] = useState('one');

    useEffect(() => {
      globalThis.window.addEventListener('resize', () => {
        if (globalThis.window.innerWidth > 768) {
          setVariant('two');
        } else {
          setVariant('one');
        }
      });
    }, []);

    return (
      <WrappedComponent {...props} variant={variant} />
    );
  };

  return EnhancedComponent;
};

export default BreakpointToggle;
