import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, SpotLight } from '@react-three/drei';
import { useGLTF } from '@react-three/drei/core/useGLTF'
import CanvasLoader from '../Loader'


const Computers = () => {
  const computer = useGLTF("../../../public/desktop_pc/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <SpotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} />
    </mesh>
  )
}




const computersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.pi / 2}
          minPolarAngle={Math.pi / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Computers 