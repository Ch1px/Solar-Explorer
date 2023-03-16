import React, { useState, useRef, useEffect } from 'react'
import { Ring, Sphere } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import {Html} from '@react-three/drei'
import gsap from 'gsap'
import {OrbitControls} from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'

import '/src/index.css'

import sunVertexShader from '/src/assets/shaders/sun/sunVertex.glsl'; import sunFragmentShader from '/src/assets/shaders/sun/sunFragment.glsl';
import sunAVertexShader from '/src/assets/shaders/sun/sunAVertex.glsl'; import sunAFragmentShader from '/src/assets/shaders/sun/sunAFragment.glsl';

import merVertexShader from '/src/assets/shaders//mercury/merVertex.glsl'; import merFragmentShader from '/src/assets/shaders/mercury/merFragment.glsl';
import merAVertexShader from '/src/assets/shaders/mercury/merAVertex.glsl'; import merAFragmentShader from '/src/assets/shaders/mercury/merAFragment.glsl';

import venusVertexShader from '/src/assets/shaders/venus/venusV.glsl'; import venusFragmentShader from '/src/assets/shaders/venus/venusF.glsl';
import venusAVertexShader from '/src/assets/shaders/venus/venusAV.glsl'; import venusAFragmentShader from '/src/assets/shaders/venus/venusAF.glsl';

import earthVertexShader from '/src/assets/shaders/earth/earthV.glsl'; import earthFragmentShader from '/src/assets/shaders/earth/earthF.glsl';
import earthAVertexShader from '/src/assets/shaders/earth/earthAV.glsl'; import earthAFragmentShader from '/src/assets/shaders/earth/earthAF.glsl';

import moonVertexShader from '/src/assets/shaders/moon/moonV.glsl'; import moonFragmentShader from '/src/assets/shaders/moon/moonF.glsl';
import moonAVertexShader from '/src/assets/shaders/moon/moonAV.glsl'; import moonAFragmentShader from '/src/assets/shaders/moon/moonAF.glsl';

import marsVertexShader from '/src/assets/shaders/mars/marsV.glsl'; import marsFragmentShader from '/src/assets/shaders/mars/marsF.glsl';
import marsAVertexShader from '/src/assets/shaders/mars/marsAV.glsl'; import marsAFragmentShader from '/src/assets/shaders/mars/marsAF.glsl';

import jupiterVertexShader from '/src/assets/shaders/jupiter/jupiterV.glsl'; import jupiterFragmentShader from '/src/assets/shaders/jupiter/jupiterF.glsl';
import jupiterAVertexShader from '/src/assets/shaders/jupiter/jupiterAV.glsl'; import jupiterAFragmentShader from '/src/assets/shaders/jupiter/jupiterAF.glsl';

import saturnVertexShader from '/src/assets/shaders/saturn/saturnV.glsl'; import saturnFragmentShader from '/src/assets/shaders/saturn/saturnF.glsl';
import saturnAVertexShader from '/src/assets/shaders/saturn/saturnAV.glsl'; import saturnAFragmentShader from '/src/assets/shaders/saturn/saturnAF.glsl';

import ringVertexShader from '/src/assets/shaders/saturn/ringV.glsl'; import ringFragmentShader from '/src/assets/shaders/saturn/ringF.glsl';
import ringAVertexShader from '/src/assets/shaders/saturn/ringAV.glsl'; import ringAFragmentShader from '/src/assets/shaders/saturn/ringAF.glsl';

import uranusVertexShader from '/src/assets/shaders/uranus/uranusV.glsl'; import uranusFragmentShader from '/src/assets/shaders/uranus/uranusF.glsl';
import uranusAVertexShader from '/src/assets/shaders/uranus/uranusAV.glsl'; import uranusAFragmentShader from '/src/assets/shaders/uranus/uranusAF.glsl'

import neptuneVertexShader from '/src/assets/shaders/neptune/neptuneV.glsl'; import neptuneFragmentShader from '/src/assets/shaders/neptune/neptuneF.glsl';
import neptuneAVertexShader from '/src/assets/shaders/neptune/neptuneAV.glsl'; import neptuneAFragmentShader from '/src/assets/shaders/neptune/neptuneAF.glsl'

import plutoVertexShader from '/src/assets/shaders/pluto/plutoV.glsl'; import plutoFragmentShader from '/src/assets/shaders/pluto/plutoF.glsl';
import plutoAVertexShader from '/src/assets/shaders/pluto/plutoAV.glsl'; import plutoAFragmentShader from '/src/assets/shaders/pluto/plutoAF.glsl';
export default function Planets(props) {

    const sun = useRef();
    const mercury = useRef();
    const venus = useRef();
    const earth = useRef();
    const mars = useRef();
    const jupiter = useRef();
    const saturn = useRef();
    const uranus = useRef();
    const neptune = useRef();

    const { camera, gl } = useThree();
    const { invalidate } = useThree();

    const [isRotating, setIsRotating] = useState(false);

    const [isHoveredSun, setIsHoveredSun] = useState(false);
    const [isHoveredMercury, setIsHoveredMercury] = useState(false);
    const [isHoveredVenus, setIsHoveredVenus] = useState(false);
    const [isHoveredEarth, setIsHoveredEarth] = useState(false);
    const [isHoveredMars, setIsHoveredMars] = useState(false);
    const [isHoveredJupiter, setIsHoveredJupiter] = useState(false);
    const [isHoveredSaturn, setIsHoveredSaturn] = useState(false);
    const [isHoveredUranus, setIsHoveredUranus] = useState(false);
    const [isHoveredNeptune, setIsHoveredNeptune] = useState(false);

  
    useFrame(({ mouse }) => {
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(sun.current); setIsHoveredSun(intersects.length > 0);
      const intersects1= raycaster.intersectObject(mercury.current); setIsHoveredMercury(intersects1.length > 0);
      const intersects2 = raycaster.intersectObject(venus.current); setIsHoveredVenus(intersects2.length > 0);
      const intersects3 = raycaster.intersectObject(earth.current); setIsHoveredEarth(intersects3.length > 0);
      const intersects4 = raycaster.intersectObject(mars.current); setIsHoveredMars(intersects4.length > 0);
      const intersects5 = raycaster.intersectObject(jupiter.current); setIsHoveredJupiter(intersects5.length > 0);
      const intersects6 = raycaster.intersectObject(saturn.current); setIsHoveredSaturn(intersects6.length > 0);
      const intersects7 = raycaster.intersectObject(uranus.current); setIsHoveredUranus(intersects7.length > 0);
      const intersects8 = raycaster.intersectObject(neptune.current); setIsHoveredNeptune(intersects8.length > 0);
    });
    
    const controlsRef = useRef();
    

    const handleClickSun = () => {

      gsap.to(controlsRef.current.target, {
      duration: 2,
        x: 0,
        y: 0,
        z: 0,
        onUpdate: () => {
          controlsRef.current.update();
        }
      });
    };
    
    function handleClickMercury() {
      gsap.to(controlsRef.current.target, {
      duration: 2,
        x: 12,
        y: 0,
        z: 0,
        onUpdate: () => {
          controlsRef.current.update();
        }
      });
    };
    const handleClickVenus = () => {
      gsap.to(controlsRef.current.target, {
      duration: 2,
        x: 18,
        y: 0,
        z: 0,
        onUpdate: () => {
          controlsRef.current.update();
        }
      });
    };
    const handleClickEarth = () => {
      gsap.to(controlsRef.current.target, {
      duration: 2,
        x: 24,
        y: 0,
        z: 0,
        onUpdate: () => {
          controlsRef.current.update();
        }
      });
    };
    const handleClickMars = () => {
      gsap.to(controlsRef.current.target, {
      duration: 2,
        x: 30,
        y: 0,
        z: 0,
        onUpdate: () => {
          controlsRef.current.update();
        }
      });
    };
    const handleClickJupiter = () => {
      gsap.to(controlsRef.current.target, {
      duration: 2,
        x: 43,
        y: 0,
        z: 0,
        onUpdate: () => {
          controlsRef.current.update();
        }
      });
    };
    const handleClickSaturn = () => {
      gsap.to(controlsRef.current.target, {
      duration: 2,
        x: 64,
        y: 0,
        z: 0,
        onUpdate: () => {
          controlsRef.current.update();
        }
      });
    };
    const handleClickUranus = () => {
      gsap.to(controlsRef.current.target, {
      duration: 2,
        x: 83,
        y: 0,
        z: 0,
        onUpdate: () => {
          controlsRef.current.update();
        }
      });
    };
    const handleClickNeptune = () => {
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: 100,
        y: 0,
        z: 0,
        onUpdate: () => {
          controlsRef.current.update();
        }
      });
    };




  const handleRotateClick = () => {
    setIsRotating(!isRotating);
  };

    useFrame((state) => {
      if (isRotating) {
        //set relative orbit speed
        sun.current.rotation.y += 0.0009;
        mercury.current.rotation.y += 0.020;
        venus.current.rotation.y += 0.014;
        earth.current.rotation.y += 0.012;
        mars.current.rotation.y += 0.0105;
        jupiter.current.rotation.y += 0.005;
        saturn.current.rotation.y += 0.004;
        uranus.current.rotation.y += 0.003;
        neptune.current.rotation.y += 0.0022;


      }
    });



    function handleClick() {
      mercury.current.rotation.set(0,0,0)
      venus.current.rotation.set(0,0,0)
      mars.current.rotation.set(0,0,0)
      earth.current.rotation.set(0,0,0)
      jupiter.current.rotation.set(0,0,0)
      saturn.current.rotation.set(0,0,0)
      uranus.current.rotation.set(0,0,0)
      neptune.current.rotation.set(0,0,0)
      invalidate();
    }



    return (
      
      <group {...props} dispose={null}>
        {isHoveredSun && <Html position={[null]}><div id='containerSun'><h1 id='name'>The Sun</h1><p id='planet'>The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun’s intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel. The temperature at the sun’s core is about 27 million degrees Fahrenheit.</p></div></Html>}
        
        {isHoveredMercury && <Html position={[null]}><div id='containerMer'><h1 id='name'>Mercury</h1><p id='planet'>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth’s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.</p><h1 id='subtitle'>A year on Mercury is just 88 days long.</h1><p id='planet'>One solar day (the time from noon to noon on the planet’s surface) on Mercury lasts the equivalent of 176 Earth days while the sidereal day (the time for 1 rotation in relation to a fixed point) lasts 59 Earth days. Mercury is nearly tidally locked to the Sun and over time this has slowed the rotation of the planet to almost match its orbit around the Sun. Mercury also has the highest orbital eccentricity of all the planets with its distance from the Sun ranging from 46 to 70 million km.</p></div></Html>}
        
        {isHoveredVenus && <Html position={[null]}><div id='containerVen'><h1 id='name'>Venus</h1><p id='planet'>Venus is a dim world of intense heat and volcanic activity. Similar in structure and size to Earth, Venus’ thick, toxic atmosphere traps heat in a runaway ‘greenhouse effect.’ The scorched world has temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus spins slowly in the opposite direction of most planet</p><h1 id='subtitle'>A day on Venus lasts longer than a year. </h1><p id='planet'>It takes 243 Earth days to rotate once on its axis (sidereal day). The planet’s orbit around the Sun takes 225 Earth days, compared to the Earth’s 365. A day on the surface of Venus (solar day) takes 117 Earth days.</p><h1 id='subtitle'>Venus is the second brightest object in the night sky.</h1><p id='planet'>Only the Moon is brighter. With a magnitude of between -3.8 to -4.6 Venus is so bright it can be seen during daytime on a clear day.</p></div></Html>}
        
        {isHoveredEarth && <Html position={[null]}><div id='containerEarth'><h1 id='name'>Earth</h1><p id='planet'>Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth’s surface. Earth’s atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. The atmosphere also protects us from incoming meteoroids, most of which break up before they can hit the surface.</p><h1 id='subtitle'>The Earth was once believed to be the centre of the universe.</h1><p id='planet'>Due to the apparent movements of the Sun and planets in relation to their viewpoint, ancient scientists insisted that the Earth remained static, whilst other celestial bodies travelled in circular orbits around it. Eventually, the view that the Sun was at the centre of the universe was postulated by Copernicus, though this is also not the case.</p></div></Html>}
        
        {isHoveredMars && <Html position={[null]}><div id='containerMars'><h1 id='name'>Mars</h1><p id='planet'>Mars is a cold desert world. It is half the size of Earth. Mars is sometimes called the Red Planet. It’s red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon. There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.</p></div></Html>}
        
        {isHoveredJupiter && <Html position={[null]}><div id='containerJup'><h1 id='name'>Jupiter</h1><p id='planet'>Jupiter is the biggest planet in our solar system. It’s similar to a star, but it never got big enough to start burning. Jupiter is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn’t have a solid surface, but it may have a solid inner core about the size of Earth. Jupiter also has rings, but they’re too faint to see very well.</p></div></Html>}
        
        {isHoveredSaturn && <Html position={[null]}><div id='containerSat'><h1 id='name'>Saturn</h1><p id='planet'>Saturn isn’t the only planet to have rings, but it definitely has the most beautiful ones. The rings we see are made of groups of tiny ringlets that surround Saturn. They’re made of chunks of ice and rock. Like Jupiter, Saturn is mostly a ball of hydrogen and helium.</p></div></Html>}
        
        {isHoveredUranus && <Html position={[null]}><div id='containerUra'><h1 id='name'>Uranus</h1><p id='planet'>Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue. Uranus also has faint rings. The inner rings are narrow and dark. The outer rings are brightly colored and easier to see. Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side.</p></div></Html>}
        
        {isHoveredNeptune && <Html position={[null]}><div id='containerNep'><h1 id='name'>Neptune</h1><p id='planet'>Neptune is dark, cold, and very windy. It’s the last of the planets in our solar system. It’s more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus. It’s made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus. Neptune has six rings, but they’re very hard to see.</p></div></Html>}
        
        {isRotating && <Html position={[null]}><div id='speedBox'><h1 id='speedDis'>Orbit Speeds</h1><p>Mercury - 47.87 km/s</p><br/><p>Venus- 35.02 km/s</p><br/><p>Earth- 29.78 km/s</p><br/><p>Mars - 24.077 km/s</p><br/><p>Jupiter - 13.07 km/s</p><br/><p>Saturn - 9.69 km/s</p><br/><p>Uranus - 6.81 km/s</p><br/><p>Neptune - 5.43 km/s</p></div></Html>}
        
        <Html position={[null]}><button id='refresh'  onClick={handleClick}>Reset Orbit Position</button></Html>
        <Html position={[null]}><button id='rotate'  onClick={handleRotateClick}>Toggle Orbit</button></Html>
        
        {/*Create objects*/}
        <group ref={sun}>
        <mesh  onClick={handleClickSun}>
        <Sphere args={[1,100,200]} scale={8} position={[0,0,0]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/sunMap.jpg'))}/>
            </Sphere>
        </mesh>
        <mesh onClick={handleClickSun}>
        <Sphere args={[1,100,200]} scale={8.01} position={[0,0,0]}>
                <meshPhysicalMaterial 
                roughness={0} metalness={0} transmission={1}/>
            </Sphere>
        </mesh>
        </group>
       
        <group ref={mercury}>
        <mesh onClick={handleClickMercury}>
            <Sphere args={[1,100,200]} scale={0.7} position={[12,0,0]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/mercMap.jpg'))}/>
            </Sphere>
        </mesh>
        <mesh onClick={handleClickMercury}>
        <Sphere args={[1,100,200]} scale={0.701} position={[12,0,0]}>
                <meshPhysicalMaterial 
                roughness={0} metalness={0} transmission={1}/>
            </Sphere>
        </mesh>
        </group>
    
        <group ref={venus}>
        <mesh onClick={handleClickVenus}>
            <Sphere args={[1,100,200]} scale={1.1} position={[18,0,0]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/venusAtmos.jpg'))}/>
            </Sphere>
        </mesh>
        <mesh onClick={handleClickVenus}>
        <Sphere args={[1,100,200]} scale={1.101} position={[18,0,0]}>
                <meshPhysicalMaterial 
                roughness={0} metalness={0} transmission={1} />
            </Sphere>
        </mesh>
        </group>
    
        <group ref={earth}>
        <mesh onClick={handleClickEarth}>
            <Sphere args={[1,100,200]} scale={1.4} position={[24,0,0]} rotation={[-Math.PI / 2, 1.8, Math.PI / 2]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/earthTexture.jpg'))}/>
            </Sphere>
        </mesh>
        <mesh onClick={handleClickEarth}>
        <Sphere args={[1,100,200]} scale={1.401} position={[24,0,0]}>
                <meshPhysicalMaterial 
                roughness={0} metalness={0} transmission={1}   clearcoat={0.5}/>
            </Sphere>
        </mesh>
        </group>
    
        <group ref={mars}>
        <mesh onClick={handleClickMars}>
            <Sphere args={[1,100,200]} scale={1.3} position={[30,0,0]} rotation={[-Math.PI / 2, 1.8, Math.PI / 2]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/marsTexture.jpg'))}/>
            </Sphere>
        </mesh>
        <mesh onClick={handleClickMars}>
        <Sphere args={[1,100,200]} scale={1.301} position={[30,0,0]}>
                <meshPhysicalMaterial 
                roughness={0} metalness={0} transmission={1}/>
            </Sphere>
        </mesh>
        </group>


        <group ref={jupiter}>
        <mesh onClick={handleClickJupiter}>
            <Sphere args={[1,100,200]} scale={3.8} position={[43,0,0]} rotation={[-Math.PI / 2, 1.8, Math.PI / 2]} >
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/jupiterTexture.jpg'))}/>
            </Sphere>
        </mesh>
        <mesh onClick={handleClickJupiter}>
        <Sphere args={[1,100,200]} scale={3.802} position={[43,0,0]}>
                <meshPhysicalMaterial 
                roughness={0} metalness={0} transmission={1}/>
            </Sphere>
        </mesh>
        </group>


        <group ref={saturn}>
        <mesh onClick={handleClickSaturn}>
            <Sphere args={[1,100,200]} scale={2.2} position={[64,0,0]} rotation={[-Math.PI / 2, 1, Math.PI / 2]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/saturnMap.jpg'))}/>
            </Sphere>
        </mesh>
        <mesh onClick={handleClickSaturn}>
        <Sphere args={[1,100,200]} scale={2.201} position={[64,0,0]}>
                <meshPhysicalMaterial 
                roughness={0} metalness={0} transmission={1}/>
            </Sphere>
        </mesh>
        

        <mesh>
            <Ring args={[3,3.2,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#696b58'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.5,3.6,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#e0e4c0'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.7,4.2,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#60615b'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.8,3.9,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#494945'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4,4.1,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#150061'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4.2,4.3,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#64645f'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4.4,4.5,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#e7e9e0'}/>
            </Ring>
        <mesh>
            <Ring args={[4.7,4.8,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#242424'}/>
            </Ring>
        </mesh>
        </mesh>
        <mesh>
            <Ring args={[4.5,4.7,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#494945'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4.8,5,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#494945'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[5,5.1,100]} position={[64,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#250061'}/>
            </Ring>
        </mesh>
        </group>
        <group ref={uranus}>
        <mesh onClick={handleClickUranus}>
            <Sphere args={[1,100,200]} scale={1.8} position={[83,0,0]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/uranusTexture.jpg'))}/>
            </Sphere>
        </mesh>
        <mesh onClick={handleClickUranus}>
        <Sphere args={[1,100,200]} scale={1.805} position={[83,0,0]}>
                <meshPhysicalMaterial 
                roughness={0} metalness={0} transmission={1}/>
            </Sphere>
        </mesh>
        
        
        <mesh>
            <Ring args={[3.05,3.14,100]} position={[83,0,0]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#4b4b4b'} />
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.4,3.47,100]} position={[83,0,0]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#81f8e8'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.7,3.75,100]} position={[83,0,0]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#444444'}/>
            </Ring>
        </mesh>
        </group>
        <group ref={neptune}>
        <mesh onClick={handleClickNeptune}>
            <Sphere args={[1,100,200]} position={[100,0,0]} scale={1.8} rotation={[-Math.PI / 2, 1.3, Math.PI / 2]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/neptuneTexture.jpg'))}/>
            </Sphere>
        </mesh>
        <mesh onClick={handleClickNeptune}>
        <Sphere args={[1,100,200]} scale={1.801} position={[100,0,0]}>
                <meshPhysicalMaterial 
                roughness={0} metalness={0} transmission={1}/>
            </Sphere>
        </mesh>

        <mesh>
            <Ring args={[3.4,3.45,100]} position={[100,0,0]} rotation={[-Math.PI / 2, 6.1, Math.PI / 2]}>
                <meshStandardMaterial color={'#383838'} opacity={'0.5'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.6,3.65,100]} position={[100,0,0]} rotation={[-Math.PI / 2, 6.1, Math.PI / 2]}>
                <meshStandardMaterial color={'#313131'}opacity={'0.5'}/>
            </Ring>
        </mesh>
        </group>
        <OrbitControls ref={controlsRef} enablePan={false} args={[camera, gl.domElement]} />
      </group>

    )
  }