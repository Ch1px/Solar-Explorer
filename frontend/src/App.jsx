import React, { useEffect, useState } from "react";
import Home from "./components/pages/Home"
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Explore from "./components/pages/Explore";
import News from "./components/pages/News";
import NavBar from "./components/navbar/NavBar";
import SandBox from "./components/pages/SandBox";
import styled from 'styled-components';
import './index.css' 
import Wallpaper from "/src/assets/img/wallpaper.jpg"

//preloader

const Section = styled.div`
height: 100vh !important;
overflow-y: hidden;
overflow-x: hidden;
margin: 0px;
width:100%;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;
background: url(${Wallpaper});
`

const Container = styled.div`
margin: 0px;
height: 100%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: none;
  color: #ffffff;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  var loader = document.getElementById('preloader');
  window.addEventListener("load", function () {
    loader.style.display = "none";
  })

  return (
    <>
      <Section>
        <NavBar />
        <Container>
          <Home />
          <About />
          <Explore />
          <News />
          <SandBox />
          <Contact />
        </Container>
      </Section>
    </>

  )
}

export default App;

