import React from 'react';
import * as Styled from './styled/TodoCard.styled';
import { deleteData } from '../module/api';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from 'react-icons/ai';
import { pathchData } from '../module/api';

const ViewCardBody = ({ id, todoValue, date, setEditMode, done }) => {
  const onDeleteClick = id => {
    deleteData(id);
    location.reload();
  };

  const onEditClick = () => {
    setEditMode(true);
  };

  const onDoneClick = () => {
    pathchData(id, { done: !done });
    location.reload();
  };

  return (
    <Styled.StyledCardBody>
      <h2>{todoValue}</h2>
      <Styled.StyledFlex>
        <p>{date}</p>
        <div>
          <button onClick={onDoneClick}>
            <AiOutlineCheck />
          </button>
          <button onClick={onEditClick}>
            <AiOutlineEdit />
          </button>
          <button onClick={() => onDeleteClick(id)}>
            <AiOutlineDelete />
          </button>
        </div>
      </Styled.StyledFlex>
    </Styled.StyledCardBody>
  );
};

export default ViewCardBody;
