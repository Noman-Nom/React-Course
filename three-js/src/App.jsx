import React, { Suspense } from 'react'
import './App.css'

import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import CircleImg from './assets/circle.png'
import { Suspense } from 'react';


const Points = ()=>{
  const imgTex = useLoader(THREE.TextureLoader,CircleImg);


  <Points>

    <bufferGeometry attach="geometry"> 

    </bufferGeometry>

    <pointsMaterial  
    attach='meterial'
    map={imgTex}
    color={0x00AAFF}
    size={0.5}
    sizeAttenuation
    transparent={false}
    alphaTest={0.5}
    opacity={1.0}
    />
  </Points>

}

const AnimationCanvas= ()=>{

  return(
    <Canvas
    colorManagement={false}
    camera={{position:[100,10,0],fov:75}}
    >
          <Suspense  fallback={null}>

      <Points/>
          </Suspense>

      
    </Canvas>
  )
}


const App = () => {
  return (
    <div className='anim'>

      <Suspense fallback={<div>Loading.....</div>}>
      <AnimationCanvas/>

      </Suspense>

    </div>
  )
}

export default App