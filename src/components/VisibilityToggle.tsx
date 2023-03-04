import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const withVisibilityToggle = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <VisibilitySensor
        onChange={(visible) => setIsVisible(visible)}
        partialVisibility={true}
      >
        <WrappedComponent {...props} isVisible={isVisible} />
      </VisibilitySensor>
    );
  };

  return EnhancedComponent;
};

export default withVisibilityToggle;
