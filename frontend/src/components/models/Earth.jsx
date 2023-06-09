/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 earth.gltf --transform
Author: BamPistache (https://sketchfab.com/karinkreeft8)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/earth-0caafb7e837047a688a3e504c0ea74af
Title: Earth
*/

import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import e from '/src/assets/models/earth-transformed.glb'

export default function Model(props) {
  const { nodes, materials } = useGLTF(e)
  const earth = useRef();


  useFrame(() => {
    earth.current.rotation.y += 0.001
  });

  return (
    <group ref={earth} {...props} dispose={null} position={[15, 0, 10]} rotation={[-Math.PI / 2, 0, Math.PI / 22]}>
      <group scale={1.2}>
        <mesh geometry={nodes.earth4_blinn1_0.geometry} material={materials.blinn1} />
        <mesh geometry={nodes.earth4_lambert1_0.geometry} material={materials.lambert1} />
      </group>
    </group>
  )
}

useGLTF.preload('/src/assets/models/earth-transformed.glb')
