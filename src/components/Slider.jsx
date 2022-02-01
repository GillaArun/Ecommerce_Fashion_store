import styled from "styled-components";
import { ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons';
import { useState } from "react";
import { sliderItems } from "../data";
import { ListItem } from "@material-ui/core";
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
background-color:white;
position:relative;
overflow:hidden;
`;

const Arrow=styled.div`
    width:50px;
    height:50px;
    align-items:center;
    background-color:#ffff7f;
    border-radius:50px;
    display:flex;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props=>props.direction==="left"&&"10px"};
    right:${props=>props.direction==="right"&&"10px"};
    cursor:pointer;
    opacity:0.6;
    z-index:2;
`;
const Wrapper=styled.div`
height:100%;
display:flex;
transform:translateX(${props=>props.slideIndex*-100}vw);
transition:all 2.5s ease;
`;

const Slide=styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:#${props=>props.bg};
`;
const ImgContainer=styled.div`
flex:1;
height:100%;
`;

const Image=styled.img`
height:80%;

`;
const InfoContainer=styled.div`
flex:1;
padding:50px;
`;

const Title=styled.h1`
font-size:70px;

`;
const Desc=styled.p`
margin:50px 0px;
font-size:20;
font-weight:500;
letter-spacing:3px;
`;

const Button=styled.button`
padding:10px;
font-size:20;
background-color:transparent;
cursor:pointer;
`;


const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
          if(direction==="left"){
              setSlideIndex(slideIndex>0?slideIndex-1:2);
          }
          else{
              setSlideIndex(slideIndex<2?slideIndex+1:0);
          }
    };
  return( <Container>
    <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
        <Slide bg={item.bg} key={item.id}>

        <ImgContainer>
        <Image src={item.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>
                {item.title}
            </Title>
            <Desc>
                {item.desc}
            </Desc>
            <Button>
                i dont want to wait
            </Button>
        </InfoContainer>
        </Slide>
        ))}
    </Wrapper>
    <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined/>
    </Arrow>
  </Container>);
};

export default Slider;

