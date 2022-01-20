import React, {useState} from "react";
import Figure from "./Figure";

export default function Drag({figuresArr}) {
  const [figures] = useState(figuresArr);
  console.log(figures)

  return (
    <div className="drag">
      {figures.map((item, index) => 
      <Figure key={index} figureColor={item.color} figureShape={item.shape} />)}
    </div>
  );
}
