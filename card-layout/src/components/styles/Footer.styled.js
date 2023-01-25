import styled from "styled-components";

export const StyledFooter = styled.footer``;

export const StyledCard03 = styled.div`
  background-color: ${({ theme }) => theme.color.card03};
  flex: 1;
  max-width: 940px;
  height: 300px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px raba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.size.tablet}) {
    flex: 100%;
    max-width: 600px;
  }
`;
