import React from 'react';
import * as Styled from './styled/TodoCard.styled';
import { deleteData } from '../module/api';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from 'react-icons/ai';
import { pathchData } from '../module/api';

const ViewCardBody = ({
  id,
  todoValue,
  date,
  setEditMode,
  done,
  setChange,
}) => {
  const onDeleteClick = async id => {
    await deleteData(id);
    setChange(prev => !prev);
  };

  const onEditClick = () => {
    setEditMode(true);
  };

  const onDoneClick = async () => {
    console.log(done);
    await pathchData(id, { done: !done });
    setChange(prev => !prev);
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
