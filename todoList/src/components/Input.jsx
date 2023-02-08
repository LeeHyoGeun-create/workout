import React, { useState } from 'react';
import { StyledInputWrrap } from './styled/Input.styled';
import { getPhoto } from '../module/api';

const Input = ({ weather, setData }) => {
  const [todo, setToDo] = useState('');
  console.log(weather);

  const onInputChange = e => {
    setToDo(e.target.value);
  };

  const onClickButton = async () => {
    const today = new Date();
    const url = await getPhoto(weather);
    const obj = { todo, url, date: today.toLocaleDateString('kr') };
    setData(prev => [...prev, obj]);
  };

  return (
    <StyledInputWrrap>
      <form>
        <input type="text" name="todo" value={todo} onChange={onInputChange} />
      </form>
      <button onClick={onClickButton}>추가</button>
    </StyledInputWrrap>
  );
};

export default Input;
