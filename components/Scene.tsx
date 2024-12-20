'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Box } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import { Suspense } from 'react'

export default function Scene() {
  const { backgroundColor } = useControls({
    backgroundColor: '#87CEEB'
  })

  return (
    <>
      <Leva />
      <Canvas>
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={0.4} />
        <spotLight position={[0, 2, 0]} angle={0.15} penumbra={1} />
        <Box args={[1, 1, 1]} position={[0, 0, 0]} >
            <meshPhysicalMaterial roughness={0} color="hotpink" />
        </Box>
        <OrbitControls />
      </Canvas>
    </>
  )
}

