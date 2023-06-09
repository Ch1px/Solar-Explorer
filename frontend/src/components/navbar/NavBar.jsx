import React from "react";
import styled from "styled-components";

import GitLogo from "/src/assets/img/gitLogo2.png"
import InstaLogo from "/src/assets/img/insta.png"
import LogoPng from "/src/assets/img/logo.png"

const Section = styled.div`
display: flex;
justify-content: center;
width: 100%;
z-index: 100000;

@media only screen and (max-width:768px){
    width: 100%;
}
@media only screen and (max-height:500px){
    display:none;
}
`
const Container = styled.div`
width: 1420px;
display: flex;
justify-content: space-between;
align-items: center;
padding:10px,0px;
padding-bottom: 5px;
padding-left: 10px;
padding-right: 10px;
@media only screen and (max-width:800px){
    width: 100%;
    padding: 10px;
}
`
const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;

`
const Logo = styled.img`
padding-top: 10px;
height: 40px;
`
const List = styled.ul`
padding-top:10px;
display: flex;
gap:50px;
list-style: none;
@media only screen and (max-width:820px){
    display: none;
}
`
const ListItem = styled.li`
cursor: pointer;
background: linear-gradient(to right, #3fb2ff, #eb42ce 50%, #ffffff 50%);
background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  &:hover{
    background-position: 0 100%;
  }
`
const Icons = styled.div`
display: flex;
align-items: center;
gap:20px;
`
const Icon = styled.img`
height:40px;
cursor: pointer;
padding-top:10px;
`
const Icon2 = styled.img`
height:40px;
cursor: pointer;
padding-top:10px;
`

const NavBar = () => {
    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Section>
            <Container>
                <Links>
                    <a href="#Home" onClick={scrollToSection}>
                        <Logo src={LogoPng} />
                    </a>
                    <List>
                        <ListItem><a href="#Home" onClick={scrollToSection}>Home</a></ListItem>
                        <ListItem><a href="#About" onClick={scrollToSection}>About</a></ListItem>
                        <ListItem><a href="#Explore" onClick={scrollToSection}>Our Solar System</a></ListItem>
                        <ListItem><a href="#News" onClick={scrollToSection}>Astronomy News</a></ListItem>
                        <ListItem><a href="#SandBox" onClick={scrollToSection}>Universe Sandbox</a></ListItem>
                        <ListItem><a href="#Contact" onClick={scrollToSection}>Contact</a></ListItem>
                    </List>
                </Links>
                <Icons>
                    <a href="https://github.com/Ch1px/Solar-Explorer" target="_blank">
                        <Icon src={GitLogo} />
                    </a>
                    <a href="https://www.instagram.com/dan_glancy/" target="_blank">
                        <Icon2 src={InstaLogo} />
                    </a>
                </Icons>
            </Container>
        </Section>
    )
}

export default NavBar