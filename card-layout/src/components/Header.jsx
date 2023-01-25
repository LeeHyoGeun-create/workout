import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import Card01 from "./Card01";
import StyledFlex from "./styles/Flex.Styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledFlex>
        <Card01 />
        <Card01 />
        <Card01 />
      </StyledFlex>
    </StyledHeader>
  );
};

export default Header;
