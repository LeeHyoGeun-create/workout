import styled from 'styled-components';

export const StyledCardHeader = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  min-height: 100px;

  h2 {
    font-size: 18px;
  }
`;

export const StyledTodoCard = styled.article`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  flex: 1 0 300px;
`;
