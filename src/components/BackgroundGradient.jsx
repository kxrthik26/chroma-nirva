import React, { useState, useEffect } from "react";

import BackgroundGradientImage from "../styles/resources/images/background_gradient.svg";

const BackgroundGradient = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageOffset = 250; // Adjust this value to bring the image closer to the cursor
  const viewportWidth = window.innerWidth; // Get viewport width

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const leftPosition =
    cursorPosition.x > viewportWidth ? viewportWidth : cursorPosition.x;

  return (
    <img
      style={{
        left: `${leftPosition}px`,
        top: `${cursorPosition.y - imageOffset}px`,
        position: "absolute",
      }}
      className="bg-gradient"
      src={BackgroundGradientImage}
    />
  );
};

export default BackgroundGradient;
