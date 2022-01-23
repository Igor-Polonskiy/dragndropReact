import React, {useState} from "react";
import Figure from "./Figure";

export default function Drag({figuresArr}) {

  return (
    <div className="drag">
      {figuresArr.length>0?figuresArr.map(item => 
      <Figure key={item.id}  id = {item.id} figureColor={item.color} figureShape={item.shape} figposition={item.position} figleft = {item.left} figtop={item.top} />): null}
    </div>
  );
}
