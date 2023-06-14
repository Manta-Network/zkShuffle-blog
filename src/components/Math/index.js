"use client"
import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const MathComponent = ({ expression }) => {
  const mathRef = useRef(null);

  useEffect(() => {
    if (mathRef.current) {
      katex.render(expression, mathRef.current, {
        throwOnError: false,
      });
    }
  }, [expression]);

  return <div ref={mathRef}></div>;
};

export default MathComponent;