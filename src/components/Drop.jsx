import React, { useEffect, useRef } from 'react';
import Figure from "./Figure";
import '../App.css'

export default function Drop({figuresArr, getDrop}) {
const drop = useRef()

useEffect(()=>{
  getDrop(drop.current)
},[getDrop])

  return (<div ref = {drop} className='drop'>
     {figuresArr.length>0?figuresArr.map(item => 
      <Figure key={item.id}  id = {item.id} figureColor={item.color} figureShape={item.shape} figposition={item.position} figleft = {item.left} figtop={item.top} />): null}
  </div>);
}
