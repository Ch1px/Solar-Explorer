/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 galaxy1.gltf --transform
Author: 991519166 (https://sketchfab.com/991519166)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/galaxy-dbb2f075329747a09cc8add2ad05acad
Title: Galaxy
*/

import React, { useRef, useEffect, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { gsap } from 'gsap';
import Planets from './PlanetRTF';
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import Planet from '../models/PlanetRTF'
import { Html, useCursor } from "@react-three/drei";
import SunLight from "../models/sunlight";
import { OrbitControls } from '@react-three/drei';
import Camera from './camera';


function Galaxy(props) {
  const { nodes, materials, animations } = useGLTF('/src/assets/models/galaxy1-transformed.glb')
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const groupRef = useRef();

  const handleOpenPlanets = async () => {
    const group = groupRef.current;
    gsap.to(group.position, { y: "+=55", duration: 3 });
    setTimeout(() => setIsCanvasOpen(true), 3000);
  }
  const handleClosePlanets = () => {
    setIsCanvasOpen(false);
  };

  return (
    <>
      {!isCanvasOpen ? (
        <>
          <Canvas style={{ background: '#020202d3' }} camera={{ fov: 15, position: [0, 50, 0] }}>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={true}/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <group ref={groupRef} onClick={handleOpenPlanets} position={props.position} {...props} dispose={null} onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
              <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.06}>
                  <group name="a76a404306c24e12b5edf6421ae7203ffbx" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_2">
                      <group name="RootNode">
                        <group name="Galaxy" rotation={[-Math.PI / 2, 0, 0]}>
                          <mesh name="Galaxy_Material_#65_0" geometry={nodes['Galaxy_Material_#65_0'].geometry} material={materials.Material_65} />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <Html position={[null]}>
            <Center><Title>Solar Explorer</Title></Center>
            <Left><Disc>Welcome to Solar Explorer! Here we have built a 3D model of our own solar system. Immerse youself in the experience.
              Here you can Explore. Learn. Interact. with all of the planets contained within our Solar System.<Disc><br></br>Click on the Solar System in the center to Dive in!</Disc>
            </Disc></Left>
            <Right><SolarTitle>Why is it Called the Solar System?</SolarTitle>
              <Disc>There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is called “the solar system” because we use the word “solar” to describe things related to our star, after the Latin word for Sun, "solis." </Disc>
            </Right></Html>
          </Canvas>
        </>
      ) : (
        <Canvas style={{ background: '#040005' }} camera={{position:[0,0,200], fov:15}}>
          <Camera/>
          <Html position={[null]}><button id='close' onClick={handleClosePlanets}>Close</button></Html>
          <Planet />
        </Canvas>
      )}
    </>
  )
}

export default Galaxy

//style
const Container = styled.div`
width:100%;
height: 100vh;
display:flex;
justify-content: center;
`

const Left = styled.div`
flex: 1;
align-items: center;
position: relative;
width: 50vh;
left: 8vh;
top: 5vh;
`
const Center = styled.div`
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
top:2vh;
left:50vh;
width: 100vh;
`
const Right = styled.div`
left:143vh;
bottom:20vh;
flex:1;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50vh;

@media only screen and (max-width:820px){
    align-items: center;
    text-align: center;
}
`
const Title = styled.h1`
    font-size:74px;
    padding-bottom: 10px;
    position: relative;
@media only screen and (max-width:820px){
    font-size: 50px;
}
`
const Disc = styled.p`
font-size:24px;
@media only screen and (max-width:820px){

}
`
const SolarTitle = styled.p`
font-size:30px;
font-weight: bold;
padding-bottom: 5px;
@media only screen and (max-width:820px){

}
`