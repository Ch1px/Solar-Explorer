import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { gsap } from 'gsap';
import styled, { keyframes } from "styled-components";
import { Canvas } from '@react-three/fiber'
import Planet from './PlanetRTF'
import { Html, useCursor } from "@react-three/drei";
import SunLight from "./sunlight";
import { OrbitControls } from '@react-three/drei';
import Camera from './camera';
import Starfield from './StarField';
import SolarStar from './SolarStars';
import * as THREE from 'three'
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber'
import { Circle } from "@react-three/drei";
import SunFlare from './SunFlare';
import MilkyWay from '/src/assets/img/milkyway.png'
import ArrowR from '/src/assets/img/arrowRight.png'
export default function Galaxy(props) {

  const textureGalaxy = useLoader(TextureLoader, MilkyWay);

  textureGalaxy.magFilter = THREE.NearestFilter;
  textureGalaxy.minFilter = THREE.NearestFilter;


  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const groupRef = useRef();

  const handleOpenPlanets = async () => {
    const group = groupRef.current;
    gsap.to(group.position, { y: "+=10", duration: 3 });
    setTimeout(() => setIsCanvasOpen(true), 3000);
  }
  const handleOpenExplore = async () => {
    setIsCanvasOpen(true);
  }
  const handleClosePlanets = () => {
    setIsCanvasOpen(false);
  };

  return (
    <>
      {!isCanvasOpen ? (
        <OriginalCont>
          <Left>
            <Canvas camera={{ position: [0, 10, 0] }} style={{ width: '100%', height: '100%' }}>
              <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={true} />
              <Starfield />
              <ambientLight intensity={1} />
              <directionalLight position={[0, 1, 0]} color={'orange'} intensity={1.2} />
              <directionalLight position={[0, 1, 0]} color={'purple'} intensity={1} />
              <directionalLight position={[0, 1, 0]} color={'blue'} intensity={1} />
              <group ref={groupRef} onClick={handleOpenPlanets} position={props.position} {...props} dispose={null} onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
                <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                  <Circle args={[5, 32]} scale={1.1}>
                    <meshStandardMaterial map={textureGalaxy} transparent={true} doubleSide={true} />
                  </Circle>
                </mesh>
              </group>
            </Canvas>
          </Left>
          <Right>
            <Title>Our Solar System</Title>
            <SolarTitle>Explore. Learn. Interact</SolarTitle><Disc1>Welcome to Solar Explorer! Here we have built a 3D model of our own solar system. Immerse youself in the experience.
              Here you can Explore. Learn. Interact. with all of the planets contained within our Solar System.
            </Disc1>
            <SolarTitle>Location?</SolarTitle>
            <Disc>The planetary system we call home is located in an outer spiral arm of the Milky Way galaxy, with our closet neighbour being the Andromeda Galaxy. At the center of our galaxy there is a super massive blackhole in which everything rotates around. This is what creates that spiral effect</Disc>
            <SolarTitle>Why is it Called the Solar System?</SolarTitle>
            <Disc>There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is called “the solar system” because we use the word “solar” to describe things related to our star, after the Latin word for Sun, "solis."</Disc>
            <ImgDisc>Click on the Milky Way to adventure deeper.</ImgDisc>
            <ExploreButton onClick={handleOpenExplore}>Explore</ExploreButton>
          </Right>

        </OriginalCont>
      ) : (
        <>
        <P>Please rotate your phone to access this feature</P>
        <Container>
        <Canvas frameloop="always" camera={{ position: [0, 50, 570], fov: 15 }} style={{ width: '100%', height: '100%', position:'absolute', top:'0px', left:'0px' }}>
          <Planet isRotating/>
          <SolarStar />
          <SunFlare />
        </Canvas>
        <CloseButton onClick={handleClosePlanets}>Close</CloseButton>
        <TitleContainer><ExploreTitle>Solar Explore</ExploreTitle></TitleContainer>
        <ContainerGuide>
          <PGuide>- Scroll to Zoom
            <br />- Click on planet to focus and learn!
            <br />- Click 'The Sun' to recenter the camera
          </PGuide>
        </ContainerGuide>
        </Container>
        </>
      )}
    </>
  )
}
const P = styled.p`
font-size:20px;
font-weight: 700;
padding: 10PX;
text-align: center;
@media only screen and (max-height:500px){
    display:none;
}
@media only screen and (min-width:650px){
    display:none;
}
`

const gradient = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

//style
const ImgDisc = styled.p`
  font-size: 20px;
  font-style: italic;
  background: linear-gradient(90deg, #00e1ff, #f50dfd);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 2s linear infinite;
  padding: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  margin-bottom: 10px;
  @media only screen and (max-width:820px){
    display:none;
  }
`


const OriginalCont = styled.div`
margin: 0 auto;
padding:10px,0px;
max-width: 1400px;
padding-left: 10px;
padding-right: 10px;
height: 100%;
display: flex;
justify-content: space-between;
@media only screen and (max-height:500px){
    display:none;
}
`

const Container = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  width: 100vw !important;
  height: 100%;
@media only screen and (max-width:500px){
    display: none;
}
`


const Left = styled.div`
flex:1;
display: flex;
position: relative;
flex-direction: column;
 justify-content: center;
 align-items: center;
 @media only screen and (max-width:768px){
    display: none;
}
`
const Right = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: center;

 @media only screen and (max-width:768px){
    align-items: center;
    text-align: center;
    padding-bottom: 100px;
    flex:1;
}
`
const SolarTitle = styled.p`
font-size:25px;
font-weight: bold;
@media only screen and (max-height:800px){
        font-size: 20px;
}
@media only screen and (max-width:820px){
 font-size: 15px;
 font-weight: 600;
 padding-bottom: 5px;
}
`
const Title = styled.h1`
    font-size:50px;
    position: relative;
    padding-bottom: 30px;
  @media only screen and (max-height:800px){
        font-size: 35px;
}
@media only screen and (max-width:768px){

    font-size: 40px;
  
}
`

const Disc1 = styled.p`
font-size:18px;
padding-bottom: 15px;
@media only screen and (max-height:800px){
        font-size: 15px;
}
@media only screen and (max-width:900px){
  padding-bottom: 20px;
  font-size: 13px;

}
`

const Disc = styled.p`
font-size:18px;
padding-bottom: 15px;
@media only screen and (max-height:800px){
        font-size: 15px;
}
@media only screen and (max-width:900px){
  padding-bottom: 20px;
  font-size: 13px;

}
`
const ExploreButton =  styled.button`
    background-color: #4618b3;
    color: white;
    font-weight: 700;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 10vh;
    white-space: nowrap;
    padding: 7px;
    font-size: small;
    z-index: 1000;

    @media only screen and (min-width:768px){
      display: none;
}
`

const CloseButton =  styled.button`
    background-color: #b31818;
    white-space: nowrap;
    color: white;
    font-weight: 700;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    min-width: 6vh;
    padding: 7px;
    top: 50px;
    right: 20px;
    position: absolute;
    font-size: small;
    z-index: 1000;

    @media only screen and (max-height:500px){
    top:10px;
    right:10px;
    font-size: x-small;
    width: auto;
}
`
const ContainerGuide = styled.div`
    max-width: 200vh;
    border-radius: 20px;
    justify-content: center;
    font-size: 15px;
    position: absolute;
    top: 70px;
    right: 20px;
@media only screen and (max-height:500px){
    right:60px;
    top:10px;
    width:auto;
}
`

const PGuide = styled.p`

@media only screen and (max-height:500px){
    font-size: 10px;

}
`

const TitleContainer = styled.div`
  width: 20vh;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 70px;
  left: 50px;
  @media only screen and (max-height:500px){
    bottom:20px;
    left:10px;
}
`

const ExploreTitle = styled.p`
  color: white;
  font-size: 25px;
  font-weight: bold;
  width: 30vh;
  white-space: nowrap;
  text-align: center;
  position: absolute;
  @media only screen and (max-height:500px){
    font-size: 12px;
}
`
