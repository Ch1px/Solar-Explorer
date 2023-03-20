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
import Starfield from './StarField';


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
          <Canvas style={{ background: '#000000d1' }} camera={{ fov: 15, position: [0, 50, 0] }}>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={true}/>
          <Starfield/>
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
            <Html position={[0,0,0]}>
            <Center><Title>Our Solar System</Title></Center>
            <Left><SolarTitle>Explore.</SolarTitle><br/><Disc>Welcome to Solar Explorer! Here we have built a 3D model of our own solar system. Immerse youself in the experience.
              Here you can Explore. Learn. Interact. with all of the planets contained within our Solar System.<Disc style={{fontWeight: '700'}}><br></br>Click on the Galaxy in the center to adventure deeper.</Disc>
            </Disc><Img src="/src/assets/img/arrowRight.png"></Img></Left>
            <Right><SolarTitle>Why is it Called the Solar System?<br/><br/></SolarTitle>
              <Disc>There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is called “the solar system” because we use the word “solar” to describe things related to our star, after the Latin word for Sun, "solis." <br/><br/></Disc>
              <SolarTitle>Size and Distance<br/><br/></SolarTitle>
              <Disc>Our solar system extends much farther than the eight planets that orbit the Sun. The solar system also includes the Kuiper Belt that lies past Neptune's orbit. This is a sparsely occupied ring of icy bodies, almost all smaller than the most popular Kuiper Belt Object – dwarf planet Pluto.</Disc>
            </Right></Html>
          </Canvas>
        </>
      ) : (
        <Canvas antialias={false} style={{ background: '#02020292' }} camera={{position:[0,30,300], fov:15}}>
          <Html position={[null]}><button id='close' onClick={handleClosePlanets}>Close</button></Html>
          <Planet />
        </Canvas>
      )}
    </>
  )
}

export default Galaxy

//style
const Img = styled.img`
object-fit: contain;
position: absolute;
margin: auto;
max-width: 70px;
height: auto;
bottom: -20px;
left:25vh;`

const Left = styled.div`
flex: 1;
align-items: center;
position: relative;
width: 50vh;
left: -90vh;
bottom: 35vh;
`
const Center = styled.div`
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
bottom:48vh;
left:-115vh;
width: 100vh;
`
const Right = styled.div`
left:40vh;
bottom:80vh;
flex:1;
position: relative;
display: flex;
flex-direction: column;
width: 50vh;
height: 100%;

@media only screen and (max-width:820px){
    align-items: center;
    text-align: center;
}
`
const Title = styled.h1`
    font-size:60px;
    padding-bottom: 10px;
    position: relative;
    font-weight:bold;
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
@media only screen and (max-width:820px){

}
`