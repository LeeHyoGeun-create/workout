import styled from "styled-components";

export const StyledMain = styled.main``;

export const StyledCard02 = styled.div`
  background-color: ${({ theme }) => theme.color.card02};
  flex: 1;
  max-width: 460px;
  height: 200px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px raba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.size.tablet}) {
    flex: 100%;
    max-width: 600px;
  }
`;
