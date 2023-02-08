import { useEffect, useState } from 'react';
import { getData } from '../module/api';

const useData = change => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      const data = await getData();
      setTodos(data);
    };

    asyncFunc();
  }, [change]);

  return [todos, setTodos];
};

export default useData;
