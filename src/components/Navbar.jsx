import React from 'react'
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import {Search,ShoppingCartOutlined} from '@material-ui/icons';

const Container=styled.div`
    height:60px;
    
    
`;

const Wrapper=styled.div`
padding:10px 20px;
background-color:#333333;
color:white;
display:flex;
justify-content:space-between;
align-items:center;
`;


const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Langugae=styled.span`
font-size:14px;
cursor:pointer;
`;


const SearchContainer=styled.div`

display:flex;
color:white;
align-items:center;
margin-left:25px;
padding:5px;
`;
const Input=styled.input`
border:none;

`

const Center=styled.div`
flex:1;
text-align:center;
`;
const Logo=styled.h1`
font-weight:bold;
`;
const Right=styled.div`
display:flex;
justify-content:flex-end;
flex:1;
align-items:center;

`;

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`;

const Navbar = () => {
    return (
        <Container>
          <Wrapper><Left><Langugae>En</Langugae>
          <SearchContainer>
              <Input/>
              <Search style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
          </Left>
          <Center><Logo>FaBoo</Logo></Center>
          <Right><MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlined />
      </Badge>
          </MenuItem></Right>
          </Wrapper>  
        </Container>
    )
}

export default Navbar
