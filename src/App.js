import { useState } from "react";
import Drop from "./components/Drop";
import Drag from "./components/Drag";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [dragZone] = useState([
    {
      id: 1,
      color: "blue",
      shape: "square",
      parent : 'drag'
    },
    {
      id: 1,
      color: "green",
      shape: "circle",
      parent : 'drag'
    },
  ]);

  function handleMouseDown(e){
    if(e.target.className === 'dragble'){
      let figure = e.target
      figure.style.position = 'absolute';
        figure.style.zIndex = 1000;
        document.body.append(figure);
    }
  }

  function handleMouseUp(e){
    
  }

  return (
    <div className="App" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <h3>
        Фигур в зоне для перетаскивания: <span>{count}</span>
      </h3>
      <Drop />
      <Drag figuresArr={dragZone} />
    </div>
  );
}

export default App;
