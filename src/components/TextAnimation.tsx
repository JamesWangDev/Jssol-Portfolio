import React, {
  useState, useEffect, ReactNode, ReactElement,
} from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface Props {
  type: string;
  delay: number;
  children: ReactNode;
  className?: string;
  threshold?: number;
}

const TextAnimation: React.FC<Props> = ({
  type, delay, children, className = '', threshold = 0.5,
}) => {
  const [ref, inView] = useInView({ threshold }); // detect when element is 50% in viewport
  const [animation, setAnimation] = useState({});

  const fadeUp = useSpring({
    opacity: inView ? 1 : 0, // animate opacity from 0 to 1 when in viewport
    transform: inView ? 'translateY(0%)' : 'translateY(-3%)', // animate translateX from -100% to 0% when in viewport
    config: { duration: 300 }, // animation duration in milliseconds
    delay: 100 * delay, // delay animation by 250 milliseconds
  });

  const fadeDown = useSpring({
    opacity: inView ? 1 : 0, // animate opacity from 0 to 1 when in viewport
    transform: inView ? 'translateY(0%)' : 'translateY(3%)', // animate translateX from -100% to 0% when in viewport
    config: { duration: 300 }, // animation duration in milliseconds
    delay: 100 * delay, // delay animation by 250 milliseconds
  });

  const fadeRight = useSpring({
    opacity: inView ? 1 : 0, // animate opacity from 0 to 1 when in viewport
    transform: inView ? 'translateX(0%)' : 'translateX(-3%)', // animate translateX from -100% to 0% when in viewport
    config: { duration: 300 }, // animation duration in milliseconds
    delay: 100 * delay, // delay animation by 250 milliseconds
  });

  const fadeLeft = useSpring({
    opacity: inView ? 1 : 0, // animate opacity from 0 to 1 when in viewport
    transform: inView ? 'translateX(0%)' : 'translateX(3%)', // animate translateX from -100% to 0% when in viewport
    config: { duration: 300 }, // animation duration in milliseconds
    delay: 100 * delay, // delay animation by 250 milliseconds
  });

  useEffect(() => {
    switch (type) {
      case 'fade_up':
        setAnimation(fadeUp);
        break;
      case 'fade_down':
        setAnimation(fadeDown);
        break;
      case 'fade_right':
        setAnimation(fadeRight);
        break;
      case 'fade_left':
        setAnimation(fadeLeft);
        break;
      default:
        setAnimation(fadeDown);
    }
  }, [type, fadeUp, fadeDown, fadeRight, fadeLeft, setAnimation]);

  return (
    <animated.div className={className} ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default TextAnimation;
