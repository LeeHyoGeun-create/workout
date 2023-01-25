import React from "react";
import Card03 from "./Card03";
import StyledFlex from "./styles/Flex.Styled";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFlex>
        <Card03 />
      </StyledFlex>
    </StyledFooter>
  );
};

export default Footer;
