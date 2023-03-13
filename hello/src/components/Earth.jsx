/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 earth.gltf --transform
Author: BamPistache (https://sketchfab.com/karinkreeft8)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/earth-0caafb7e837047a688a3e504c0ea74af
Title: Earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/src/assets/models/earth-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.3}>
      <mesh geometry={nodes.earth4_blinn1_0.geometry} material={materials.blinn1} />
      <mesh geometry={nodes.earth4_lambert1_0.geometry} material={materials.lambert1} />
      </group>
    </group>
  )
}

useGLTF.preload('/src/assets/models/earth-transformed.glb')
