import React, { useState } from 'react';
import * as Styled from './styled/TodoCard.styled';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import { pathchData } from '../module/api';

const EditCardBody = ({ id, todoValue, date, setEditMode, setChange }) => {
  const [todo, setTodo] = useState(todoValue);

  const onTodoChange = e => {
    setTodo(e.target.value);
  };

  const onEditClick = async () => {
    if (todo === todoValue) {
      setEditMode(false);
      return;
    }
    await pathchData(id, { todo });
    setChange(prev => !prev);
  };
  const onKeyPress = async e => {
    if (e.key === 'Enter') {
      await pathchData(id, { todo });
      setChange(prev => !prev);
    }
  };

  const onCancelClick = () => {
    setEditMode(false);
  };

  return (
    <Styled.StyledCardBody>
      <input
        type="text"
        value={todo}
        placeholder="Input your Todo"
        onChange={onTodoChange}
        onKeyPress={onKeyPress}
      />
      <Styled.StyledFlex>
        <p>{date}</p>
        <div>
          <button onClick={onEditClick}>
            <AiOutlineCheckSquare />
          </button>
          <button onClick={onCancelClick}>
            <MdOutlineCancelPresentation />
          </button>
        </div>
      </Styled.StyledFlex>
    </Styled.StyledCardBody>
  );
};

export default EditCardBody;
