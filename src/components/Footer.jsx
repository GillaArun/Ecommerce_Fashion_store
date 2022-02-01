import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container=styled.div`
display:flex;
`;
const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`;
const Logo=styled.h1``;
const Desc=styled.p`
margin:20px 0px;

`;
const SocailContainer=styled.h1`
display:flex;
`;
const SocialIcon=styled.h1`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;
const Center=styled.div`
flex:1;
padding:40px;
`;
const Title=styled.h3`
margin-bottom:30px;
`;

const List=styled.ul`
margin:0px;
padding:0px;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem=styled.li`
width:50%;
margin:bottom:10px;
`;
const Right=styled.div`
flex:1;
padding:20px;
`;


const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-item:center;
`;
const Payment=styled.img`
width:30%;
`;
const Footer = () => {
  return <Container>
      <Left>
          <Logo>Faboo</Logo>
          <Desc>Trendy, Funky, Classic.. soo many wanna have a great look
              then you. Must try our collecions. We are having a great combos
              and having a great sales.It is a prefect time to grab and have new looks.
          </Desc>
          <SocailContainer>
              <SocialIcon color="385999">
                  <Facebook/>
              </SocialIcon >
              <SocialIcon color="E4405F">
                  <Instagram/>
              </SocialIcon>
              <SocialIcon color="55ACEE">
                  <Twitter/>
              </SocialIcon>
              <SocialIcon color="E60023">
                  <Pinterest/>
              </SocialIcon>
          </SocailContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>More</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>T&C</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
              <Room style={{marginRight:"10px"}}/>
            2-445-255 hyderabad
          </ContactItem>
          <ContactItem>
              <Phone style={{marginRight:"10px"}}/>
              +91 83729 24994
          </ContactItem>
          <ContactItem>
              <MailOutline style={{marginRight:"10px"}}/>
              faboo@gmail.com
          </ContactItem>
          <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPdY7KxZn90UFPfitE-hcIDRRO9wkW1j9EQ&usqp=CAU"/>
      </Right>
  </Container>;
};

export default Footer;
