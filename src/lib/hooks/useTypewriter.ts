// src/app/lib/hooks/useTypewriter.ts
'use client';

import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Start typing after the specified delay
    const delayTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [text, speed, isTyping]);

  return displayText;
};