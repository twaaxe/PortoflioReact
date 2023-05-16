import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei';
import { useGLTF } from '@react-three/drei/core/useGLTF'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>

    </mesh>
  )
}

export default Computers