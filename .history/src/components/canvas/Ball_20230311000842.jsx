import React from 'react'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Decal,Float,OrbitControls,Preload,useTexture} from "@react-three/drei"

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])


  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
    </Float>
  )
}

const BallCanvas = ({icon})=>{
  return(
    <Canvas frameLoop='demand'     gl={{ preserveDrawingBuffer: true }} >
    <Suspense fallback={<CanvasLoader />} >
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
  )
}

export default BallCanvas