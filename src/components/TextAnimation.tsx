import React, {
  useState, useEffect, ReactNode, ReactElement,
} from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const TextAnimation: React.FC<{ type: string, delay: number, children: ReactElement }> = ({ type, delay, children }) => {
  const [ref, inView] = useInView({ threshold: 0.5 }); // detect when element is 50% in viewport
  const [animation, setAnimation] = useState({});

  const fade_up = useSpring({
    opacity: inView ? 1 : 0, // animate opacity from 0 to 1 when in viewport
    transform: inView ? 'translateY(0%)' : 'translateY(-3%)', // animate translateX from -100% to 0% when in viewport
    config: { duration: 300 }, // animation duration in milliseconds
    delay: 100 * delay, // delay animation by 250 milliseconds
  });

  const fade_down = useSpring({
    opacity: inView ? 1 : 0, // animate opacity from 0 to 1 when in viewport
    transform: inView ? 'translateY(0%)' : 'translateY(3%)', // animate translateX from -100% to 0% when in viewport
    config: { duration: 300 }, // animation duration in milliseconds
    delay: 100 * delay, // delay animation by 250 milliseconds
  });

  const fade_right = useSpring({
    opacity: inView ? 1 : 0, // animate opacity from 0 to 1 when in viewport
    transform: inView ? 'translateX(0%)' : 'translateX(-3%)', // animate translateX from -100% to 0% when in viewport
    config: { duration: 300 }, // animation duration in milliseconds
    delay: 100 * delay, // delay animation by 250 milliseconds
  });

  const fade_left = useSpring({
    opacity: inView ? 1 : 0, // animate opacity from 0 to 1 when in viewport
    transform: inView ? 'translateX(0%)' : 'translateX(3%)', // animate translateX from -100% to 0% when in viewport
    config: { duration: 300 }, // animation duration in milliseconds
    delay: 100 * delay, // delay animation by 250 milliseconds
  });

  useEffect(() => {
    switch (type) {
      case 'fade_up':
        setAnimation(fade_up);
        break;
      case 'fade_down':
        setAnimation(fade_down);
        break;
      case 'fade_right':
        setAnimation(fade_right);
        break;
      case 'fade_left':
        setAnimation(fade_left);
        break;
      default:
        setAnimation(fade_up);
    }
  }, []);

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default TextAnimation;
