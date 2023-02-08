import React, { useState } from 'react';
import { StyledInputWrrap } from './styled/Input.styled';
import { getPhoto, postData } from '../module/api';

const Input = ({ weather, setChange }) => {
  const [todo, setToDo] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    await onPostValue();
    setToDo('');
    setChange(prev => !prev);
  };

  const onPostValue = async () => {
    const today = new Date();
    const url = await getPhoto(weather);
    const obj = {
      todo,
      url,
      date: today.toLocaleDateString('kr'),
      done: false,
    };
    postData(obj);
  };

  const onInputChange = async e => {
    setToDo(e.target.value);
  };

  const onClickButton = async () => {
    await onPostValue();
    setToDo('');
    setChange(prev => !prev);
  };

  return (
    <StyledInputWrrap>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="todo"
          maxLength={30}
          value={todo}
          onChange={onInputChange}
        />
      </form>
      <button onClick={onClickButton}>추가</button>
    </StyledInputWrrap>
  );
};

export default Input;
