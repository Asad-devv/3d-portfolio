import React from 'react'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Decal,Float,OrbitControls,Preload,useTexture} from "@react-three/drei"

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])


  return (
    <div>Ball</div>
  )
}

const BallCanvas = ({})=>{
  return(
    <Canvas frameLoop='demand'     gl={{ preserveDrawingBuffer: true }} >
    <Suspense fallback={<CanvasLoader />} >
      <OrbitControls enableZoom={false} />
      <Computers isMobile={isMobile} />
    </Suspense>
    <Preload all />
  </Canvas>
  )
}

export default Ball