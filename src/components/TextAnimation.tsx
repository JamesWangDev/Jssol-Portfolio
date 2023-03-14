import React, {
  useState, useEffect, ReactNode, ReactElement,
} from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface Props {
  type: string;
  delay: number;
  children?: ReactNode;
  className?: string;
  threshold?: number;
}

const TextAnimation: React.FC<Props> = ({
  type, delay, children, className = '', threshold = 0.5,
}) => {
  const [ref, inView] = useInView({ threshold }); // detect when element is 50% in viewport

  const getAnimation = () => {
    switch (type) {
      case 'fade_up':
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0%)' : 'translateY(-3%)',
          config: { duration: 300 },
          delay: 100 * delay,
        };
      case 'fade_down':
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0%)' : 'translateY(3%)',
          config: { duration: 300 },
          delay: 100 * delay,
        };
      case 'fade_right':
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0%)' : 'translateX(-3%)',
          config: { duration: 300 },
          delay: 100 * delay,
        };
      case 'fade_left':
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0%)' : 'translateX(3%)',
          config: { duration: 300 },
          delay: 100 * delay,
        };
      default:
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0%)' : 'translateY(3%)',
          config: { duration: 300 },
          delay: 100 * delay,
        };
    }
  };

  const animation = useSpring(getAnimation());

  return (
    <animated.span className={className} ref={ref} style={animation}>
      {children}
    </animated.span>
  );
};

export default TextAnimation;
