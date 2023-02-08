import React from 'react';
import * as Styled from './styled/TodoCard.styled';

const TodoCard = ({ todo, url, date }) => {
  return (
    <Styled.StyledTodoCard>
      <Styled.StyledCardHeader>
        <img src={url} />
      </Styled.StyledCardHeader>
      <Styled.StyledCardBody>
        <h2>{todo}</h2>
        <p>{date}</p>
      </Styled.StyledCardBody>
    </Styled.StyledTodoCard>
  );
};

export default TodoCard;
