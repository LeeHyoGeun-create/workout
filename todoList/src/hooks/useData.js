import React, { useEffect, useState } from 'react';
import { getData } from '../module/api';

const useData = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      const data = await getData();
      setTodos(data);
    };

    asyncFunc();
  }, []);

  return [todos, setTodos];
};

export default useData;
