import React, {useState} from "react";
import Figure from "./Figure";

export default function Drag({figuresArr}) {
  const [figures] = useState(figuresArr);
  console.log(figures)

  return (
    <div className="drag">
      {figures.map(item => 
      <Figure key={item.id} figureColor={item.color} figureShape={item.shape} />)}
    </div>
  );
}
