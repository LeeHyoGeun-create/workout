import React from 'react';
import TodoCard from './TodoCard';
import StyledTodos from './styled/Todos.styled';

const Todos = ({ data }) => {
  return (
    <StyledTodos>
      {data.map(todoObj => (
        <TodoCard key={todoObj.id} {...todoObj} />
      ))}
    </StyledTodos>
  );
};

export default Todos;
