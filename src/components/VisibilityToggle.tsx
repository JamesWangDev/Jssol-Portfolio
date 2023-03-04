import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const VisibilityToggle = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleChange = (visible) => {
      setIsVisible(visible);
    };

    return (
      <VisibilitySensor
        onChange={handleChange}
        partialVisibility={true}
        scrollCheck={true}
      >
        <WrappedComponent {...props} isVisible={isVisible} />
      </VisibilitySensor>
    );
  };

  return EnhancedComponent;
};

export default VisibilityToggle;
