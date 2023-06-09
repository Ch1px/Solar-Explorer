import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SolarStar(){
  const stars = useRef()
  const positions = new Array(5000)
    .fill()
    .map(() => [
      (Math.random() - 0.5) * 1000,
      (Math.random() - 0.5) * 1000,
      (Math.random() - 0.5) * 1000,
    ])

  const geometry = new THREE.BufferGeometry(1, 1, 1)
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions.flat(), 3))

  useFrame(() => {
    stars.current.rotation.y += 0.00002
  })

  return (
    <points ref={stars}>
      <bufferGeometry attach="geometry" {...geometry} />
      <pointsMaterial attach="material" size={0.5} sizeAttenuation color="white" />
    </points>
  )
}