import React, { useState } from 'react';
import { StyledInputWrrap } from './styled/Input.styled';

const Input = () => {
  const [todo, setToDo] = useState('');

  const onInputChange = e => {
    setToDo(e.target.value);
  };

  return (
    <StyledInputWrrap>
      <form>
        <input type="text" name="todo" value={todo} onChange={onInputChange} />
      </form>
      <button>추가</button>
    </StyledInputWrrap>
  );
};

export default Input;
