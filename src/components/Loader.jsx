import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {

  const progess = useProgess();
  return (
    <Html>
      <span className='canvas-load'></span>
      <p>{progress.toFixed(2)}%</p> {/* p.style at 59:42 */}
    </Html>

  )
}

export default Loader