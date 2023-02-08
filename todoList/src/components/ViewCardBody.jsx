import React from 'react';
import * as Styled from './styled/TodoCard.styled';
import { deleteData } from '../module/api';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const ViewCardBody = ({ id, todoValue, date, setEditMode }) => {
  const onDeleteClick = id => {
    deleteData(id);
    location.reload();
  };

  const onEditClick = () => {
    setEditMode(true);
  };

  return (
    <Styled.StyledCardBody>
      <h2>{todoValue}</h2>
      <Styled.StyledFlex>
        <p>{date}</p>
        <div>
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
