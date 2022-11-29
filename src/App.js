import React from "react";
import SceneComponent from "./components/SceneComponent";
import "./App.css";

// import { onRender, onSceneReady } from "./components/Box";
import { onRender, onSceneReady } from "./components/Writer";

export default () => (
  <div>
    <SceneComponent
      antialias
      onSceneReady={onSceneReady}
      onRender={onRender}
      id="my-canvas"
      width="600"
      height="400"
    />
  </div>
);
