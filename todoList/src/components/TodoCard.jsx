import React, { useState } from 'react';
import * as Styled from './styled/TodoCard.styled';

import EditCardBody from './EditCardBody';
import ViewCardBody from './ViewCardBody';

//https://codepen.io/eyupucmaz/pen/oNbeXOb
const TodoCard = ({ id, todo, url, date }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Styled.StyledTodoCard>
      <Styled.StyledCardHeader>
        <img src={url} />
      </Styled.StyledCardHeader>
      {editMode ? (
        <EditCardBody
          id={id}
          todoValue={todo}
          date={date}
          setEditMode={setEditMode}
        />
      ) : (
        <ViewCardBody
          id={id}
          todoValue={todo}
          date={date}
          setEditMode={setEditMode}
        />
      )}
    </Styled.StyledTodoCard>
  );
};

export default TodoCard;
