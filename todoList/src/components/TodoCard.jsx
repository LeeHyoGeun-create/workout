import React from 'react';
import * as Styled from './styled/TodoCard.styled';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { deleteData } from '../module/api';

//https://codepen.io/eyupucmaz/pen/oNbeXOb
const TodoCard = ({ id, todo, url, date }) => {
  const onDeleteClick = id => {
    deleteData(id);
    location.reload();
  };

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
            <button onClick={() => onDeleteClick(id)}>
              <AiOutlineDelete />
            </button>
          </div>
        </Styled.StyledFlex>
      </Styled.StyledCardBody>
    </Styled.StyledTodoCard>
  );
};

export default TodoCard;
