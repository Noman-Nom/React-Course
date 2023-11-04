import React, { Suspense, useMemo } from "react";
import "./App.css";

import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import CircleImg from "./assets/circle.png";

const Points = () => {
  const imgTex = useLoader(THREE.TextureLoader, CircleImg);

  const count = 100;
  const sep = 3;
  const positions = useMemo(() => {
    const positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = 0;
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep]);

  return (
    <>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={["attributes", "position"]}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          attach="material"
          map={imgTex}
          color={0x00aaff}
          size={0.5}
          sizeAttenuation
          transparent={false}
          alphaTest={0.5}
          opacity={1.0}
        />
      </points>
    </>
  );
};

const AnimationCanvas = () => {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
};

const App = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
};

export default App;
