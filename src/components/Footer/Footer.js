import React from 'react';
import { FooterContainer } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} by <span>serdyznet</span>. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;