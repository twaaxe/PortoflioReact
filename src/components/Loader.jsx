import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {

  const progess = useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      {/* <p>{progess.toFixed(2)}%</p> */}
    </Html>

  )
}

export default Loader