import React, { useEffect, useState } from "react";

const TypingAnimation = ({ text, speed = 24, className = "" }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayed, text, speed]);
  return (
    <span className={className}>
      {displayed}
      <span className="typing-caret" />
    </span>
  );
};
export default TypingAnimation;
