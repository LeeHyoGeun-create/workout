import React, { useState } from 'react';
import * as Styled from './styled/TodoCard.styled';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import { pathchData } from '../module/api';

const EditCardBody = ({ id, todoValue, date, setEditMode }) => {
  const [todo, setTodo] = useState(todoValue);

  const onTodoChange = e => {
    setTodo(e.target.value);
  };

  const onEditClick = () => {
    pathchData(id, { todo });
    location.reload();
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      pathchData(id, { todo });
      location.reload();
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
