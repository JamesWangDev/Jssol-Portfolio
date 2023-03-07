import React, { useState, useEffect } from 'react';

interface Props {
  WrappedComponent: JSX.Element;
}

const BreakpointToggle: React.FC<Props> = (WrappedComponent) => {
  const EnhancedComponent: React.FC<{props: object}> = (props) => {
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
