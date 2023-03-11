import React from 'react'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Decal,Float,OrbitControls,Preload,useTexture} from "@react-three/drei"

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.img])

  return (
    <div>Ball</div>
  )
}

export default Ball