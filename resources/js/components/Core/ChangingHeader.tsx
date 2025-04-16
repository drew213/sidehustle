import React, { useEffect, useState } from 'react';

const texts = [
  "The Greeks have their 'Agora',",
  "The Chinese have their 'Shìchǎng',",
  "The Persians have their 'Bazaar',",
  "The Romans had their 'Forum',",
  "The Mesopotamians had their 'Kārum',",
  "The Indians have the 'Vipaṇi',",
  "The Yorubas have their 'OJA',",
];

export default function ChangingHeader() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseBetween = 2000;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetween);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="text-center py-6">
      <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
        <span>{displayText}</span>
        <span className="font-bold animate-blink">|</span>
      </h1>
      <p className="text-lg mt-4">Now we present to you <span className="text-primary">S£RVHUB</span></p>
    </div>
  );
}
