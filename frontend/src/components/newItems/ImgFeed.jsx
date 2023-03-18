import React from "react";
import styled from "styled-components";

const Img = styled.div`
    width:110px;
    padding-bottom: 13px;
`


const Feed = ({image}) => {


    return(
        <>
            <Img>{image && <img src={image} alt="article"/>}</Img>
        </>
            

    )
}

export default Feed;