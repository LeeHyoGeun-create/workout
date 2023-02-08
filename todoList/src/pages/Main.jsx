import React from 'react';
import Input from '../components/Input';
import Todos from '../components/Todos';

const Main = ({ data, setData, weather }) => {
  return (
    <main>
      <Input weather={weather} setData={setData} />
      <Todos data={data} />
    </main>
  );
};

export default Main;
