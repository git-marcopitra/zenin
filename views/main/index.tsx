import { Div, H1 } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC, useRef } from 'react';

const MotionDiv = motion(Div);

const Main: FC = () => {
  const constraintsRef = useRef(null);

  return (
    <MotionDiv minHeight="100vh" minWidth="100vw" ref={constraintsRef}>
      <H1>Main</H1>
      <MotionDiv
        drag
        bg="red"
        width="10rem"
        height="7rem"
        borderRadius="1rem"
        dragConstraints={constraintsRef}
      />
    </MotionDiv>
  );
};

export default Main;
