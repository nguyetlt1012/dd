import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
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
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
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
  margin-bottom: 5px;
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
`;
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment=styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          nihil esse nostrum vel ab qui eum molestias, eligendi nobis quibusdam
          mollitia atque numquam pariatur, necessitatibus expedita! Asperiores
          voluptates accusamus harum?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="0A0A0A">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Userful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman fashin</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Wishlish</ListItem>
          <ListItem>Wishlish</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}} />
          622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}}/> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
