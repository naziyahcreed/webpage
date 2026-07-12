import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, prefix = "", suffix = "", className = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);

  // Use Framer Motion's useSpring to animate the number smoothly
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 15,
    mass: 1,
  });

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  // Hook into the spring value to update React state for rendering
  useEffect(() => {
    return springValue.onChange((latest) => {
      setDisplayValue(latest);
    });
  }, [springValue]);

  // Format the number to Indian Rupee standard format (e.g., 1,00,000)
  const formattedValue = Math.round(displayValue).toLocaleString('en-IN');

  return (
    <span className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
