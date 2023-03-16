import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Canvas} from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Articles from "../newItems/Articles";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
width:100%;
height: 100%;
display:flex;
justify-content: center;
`

const Left = styled.div`
flex:1;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`
const Title = styled.h1`
font-size:50px;
font-weight: bold;
padding-bottom: 20px;
`
const Dis = styled.p`
font-size:24px;
`

const Right = styled.div`
flex:1;
position: relative;
`
const Center = styled.div`
flex:1;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
`

const Iframe = styled.iframe`
height: 900px;
width: 100%;
opacity: 90%;

`

const News = () => {
    return (
        <Section id ='News'>
            <Container>
                <Left></Left>
                <Center>
                    <Title>Astronomy news</Title>
                    <Articles/></Center>
                <Right></Right>
            </Container>
        </Section>
    )
}

export default News