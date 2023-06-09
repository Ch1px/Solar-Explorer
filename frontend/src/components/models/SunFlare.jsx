import sunAVertexShader from '/src/assets/shaders/sun/sunAVertex.glsl'; import sunAFragmentShader from '/src/assets/shaders/sun/sunAFragment.glsl';
import React, { useState, useRef, useEffect } from 'react'
import { Sphere } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SolarStar from './SolarStars';



export default function SunFlare() {

    return (

        <mesh>
            <Sphere args={[1, 100, 100]} scale={46} position={[0, 0, 0]}>
                <shaderMaterial vertexShader={sunAVertexShader} fragmentShader={sunAFragmentShader} blending={THREE.AdditiveBlending} side={THREE.BackSide} transparent={true}/>
            </Sphere>
        </mesh>
 )
}