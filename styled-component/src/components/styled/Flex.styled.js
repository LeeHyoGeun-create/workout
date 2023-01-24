import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    // flex 2 === flex 2 1 0
    // flex grow, flex shrink, flex basis
    // flex basis 기본 초기값을 먼저 잡고
    // flex grow, shrink 값에 따라 크기가 조정됨.
    // basis 0 가능한 가장 작은 너비로 요소를 축소
    // basis auto 내부 요소 길이만큼 영역을 확보
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
