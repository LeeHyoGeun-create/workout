import React from 'react';
import * as Styled from './styled/TodoCard.styled';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

//https://codepen.io/eyupucmaz/pen/oNbeXOb
const TodoCard = ({ todo, url, date }) => {
  return (
    <Styled.StyledTodoCard>
      <Styled.StyledCardHeader>
        <img src={url} />
      </Styled.StyledCardHeader>
      <Styled.StyledCardBody>
        <h2>{todo}</h2>
        <Styled.StyledFlex>
          <p>{date}</p>
          <div>
            <button>
              <AiOutlineEdit />
            </button>
            <button>
              <AiOutlineDelete />
            </button>
          </div>
        </Styled.StyledFlex>
      </Styled.StyledCardBody>
    </Styled.StyledTodoCard>
  );
};

export default TodoCard;
