import React from 'react'
import './App.css'

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber'
import CircleImg from './assets/circle.png'

const Points = ()=>{

}

const AnimationCanvas= ()=>{

  return(
    <Canvas>

      
    </Canvas>
  )
}


const App = () => {
  return (
    <div className='anim'>

      <AnimationCanvas/>
    </div>
  )
}

export default App