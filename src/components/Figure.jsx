import React, { useEffect, useState } from "react";

export default function Figure({
  figureColor = "black",
  figureShape = "square",
}) {
  const [size] = useState(100);
  const [color] = useState(figureColor);
  const [shape] = useState(figureShape);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    if (shape === "circle") {
      setRadius(size/2);
    }
  }, []);

  return (
    <div className="dragble"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: `${radius}px`,
      }}
    ></div>
  );
}
