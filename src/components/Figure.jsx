import React, { useEffect, useState } from "react";

export default function Figure({
  figureColor = "black",
  figureShape = "square",
  figposition,
  figleft,
  figtop,
  id
}) {
  const [size] = useState(100);
  const [color] = useState(figureColor);
  const [shape] = useState(figureShape);
  const [radius, setRadius] = useState(0);
  const [position] = useState(figposition)
  const [left] = useState(figleft)
  const [top] = useState(figtop)


  useEffect(() => {
    if (shape === "circle") {
      setRadius(size/2);
    }
  }, [shape,size]);

  return (
    <div className="dragble"
    id = {id}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: `${radius}px`,
        position: `${position}`,
        left: left,
        top: top
      }}
    ></div>
  );
}
