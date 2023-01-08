import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #${(props) => props.color};
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "lightgrey"})}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-COMM.</Logo>
        <Desc>
          Looking for <b>vintage</b>-inspired pieces for your special event or
          any day? Fall in love with great options from E-COMM.. Free shipping
          over 500 Rupees
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            
              <i class="fa-brands fa-facebook"></i>
            
          </SocialIcon>
          <SocialIcon color="e4405f">
            
              <i class="fa-brands fa-instagram"></i>
            
          </SocialIcon>
          <SocialIcon color="55acee">
            
              <i class="fa-brands fa-twitter"></i>
            
          </SocialIcon>
          <SocialIcon color="e60023">
            
              <i class="fa-brands fa-pinterest"></i>
            
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>About</ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
        <span style={{ marginRight: "10px" }}>
          <i class="fa-solid fa-location-dot"></i>431, Yemen Road , Yemen
        </span>
        </ContactItem>
        <ContactItem>
          <i class="fa-solid fa-phone"></i>+91 1023456789
        </ContactItem>
        <ContactItem>
          <i class="fa-regular fa-envelope"></i>ecomm.yemen@email.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
