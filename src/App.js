import { useState } from "react";
import Drop from "./components/Drop";
import Drag from "./components/Drag";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [dropZone, setDropZone] = useState([]);
  const [mousdown, setMousdown] = useState(false);
  const [targetFigure, setTargetFigure] = useState();
  const [drop, setDrop] = useState();
  const [dragZone, setDragZone] = useState([
    {
      id: "1",
      color: "blue",
      shape: "square",
      parent: "drag",
      position: "static",
      left: 0,
      top: 0,
    },
    {
      id: "2",
      color: "green",
      shape: "circle",
      parent: "drag",
      position: "static",
      left: 0,
      top: 0,
    },
  ]);

  function setCoordinate(figure, e) {
    figure.style.left = e.pageX - figure.offsetWidth / 2 - 20 + "px";
    figure.style.top = e.pageY - figure.offsetHeight / 2 - 20 + "px";
  }

  function handleMouseDown(e) {
    setMousdown(true);
    if (e.target.className === "dragble") {
      let figure = e.target;
      setTargetFigure(figure);
      figure.style.position = "absolute";
      figure.style.zIndex = 1000;
      setCoordinate(figure, e);
    }
  }

  function handleMouseMove(e) {
    if (mousdown && targetFigure) {
      setCoordinate(targetFigure, e);
      if (
        targetFigure.getBoundingClientRect().left < 0 ||
        targetFigure.getBoundingClientRect().right > window.innerWidth ||
        targetFigure.getBoundingClientRect().top < 0 ||
        targetFigure.getBoundingClientRect().bottom > window.innerHeight
      ) {
        returnTodrag()
      }
    }
  }
function returnTodrag(){
  let fig = dropZone.find((item) => item.id === targetFigure.id);
  setDropZone((prev) =>
    prev.filter((item) => item.id !== targetFigure.id)
  );
  if (fig) {
    setCount((prev) => --prev);
    fig.position = "static";
    fig.left = 0;
    fig.top = 0;
    fig.zIndex = 1;
    setDragZone((prev) => [...prev, fig]);
  } else {
    targetFigure.style.position = "static";
  }
}

  function handleMouseUp(e) {
    setMousdown(false);
    if (targetFigure) {
      if (
        targetFigure.getBoundingClientRect().left >
          drop.getBoundingClientRect().left &&
        targetFigure.getBoundingClientRect().right <
          drop.getBoundingClientRect().right &&
        targetFigure.getBoundingClientRect().top >
          drop.getBoundingClientRect().top &&
        targetFigure.getBoundingClientRect().bottom <
          drop.getBoundingClientRect().bottom
      ) {
        if (
          dropZone.find((item) => item.id === targetFigure.id) === undefined
        ) {
          let fig = dragZone.find((item) => item.id === targetFigure.id);
          if (fig) {
            setDragZone((prev) =>
              prev.filter((item) => item.id !== targetFigure.id)
            );
            fig.position = "absolute";
            fig.id = targetFigure.id;
            fig.left = e.pageX - 70;
            fig.top = e.pageY - 70;
            setDropZone((prev) => [...prev, fig]);
            setCount((prev) => ++prev);
          }
        }
      } else {
        returnTodrag()
      }
    }
    setTargetFigure(null);
  }

  function getDrop(drop) {
    setDrop(drop);
  }

  return (
    <div
      className="App"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h3>
        Фигур в зоне для перетаскивания: <span>{count}</span>
      </h3>
      <Drop getDrop={getDrop} figuresArr={dropZone} />
      <Drag figuresArr={dragZone} />
    </div>
  );
}

export default App;
