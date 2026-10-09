import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypeWriter = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
}: TypeWriterProps) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (text === currentWord) {
        timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        timeoutId = setTimeout(
          () => setText(currentWord.substring(0, text.length + 1)),
          typingSpeed
        );
      }
    } else {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeoutId = setTimeout(
          () => setText(currentWord.substring(0, text.length - 1)),
          deletingSpeed
        );
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="font-mono">
      <span className="text-cyber-cyan">{text}</span>
      <span className="animate-pulse text-cyber-cyan">|</span>
    </span>
  );
};

export default TypeWriter;
