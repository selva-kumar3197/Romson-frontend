import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SlideText from '../SlideText';


const SlideSentence = (props) => {
  const [sentence, setSentence] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (props?.children && inView) {
    //   const words = splitStringIntoChunks(props?.children, 4);
      const words = props?.children?.split(" ");
      const sentence = words?.map((word, index) => (
        <SlideText delay={props?.delay} index={index} key={index}>
          {word}
        </SlideText>
      ));
      setSentence(sentence);
    }
  }, [props?.children, inView]);

  return <span ref={ref}>{sentence}</span>;
};

export default SlideSentence;
