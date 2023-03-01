//TODO: final de ecommerce, con datos de ubicacion y redes sociales

import React from "react";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        MiamiHome Ecuador
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>xxxx</Heading>
            <FooterLink href="#">Sobre Nosotros</FooterLink>
            <FooterLink href="#">Nuestra Mision</FooterLink>
            <FooterLink href="#">XXXXXX</FooterLink>
          </Column>
          <Column>
            <Heading>Servicios</Heading>
            <FooterLink href="#">xxxx</FooterLink>
            <FooterLink href="#">xxxx</FooterLink>
            <FooterLink href="#">xxxx</FooterLink>
            <FooterLink href="#">xxxx</FooterLink>
          </Column>
          <Column>
            <Heading>Contacto</Heading>
            <FooterLink href="#">xxxx</FooterLink>
            <FooterLink href="#">xxxx</FooterLink>
            <FooterLink href="#">xxx</FooterLink>
            <FooterLink href="#">xxxx</FooterLink>
          </Column>
          <Column>
            <Heading>Nuestras redes</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;