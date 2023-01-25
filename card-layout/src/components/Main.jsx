import React from "react";
import Card02 from "./Card02";
import StyledFlex from "./styles/Flex.Styled";
import { StyledMain } from "./styles/Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <StyledFlex>
        <Card02 />
        <Card02 />
      </StyledFlex>
    </StyledMain>
  );
};

export default Main;
