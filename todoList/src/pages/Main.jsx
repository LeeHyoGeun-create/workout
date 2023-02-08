import React from 'react';
import Input from '../components/Input';
import Todos from '../components/Todos';

const Main = ({ data, setData, weather, setChange }) => {
  return (
    <main>
      <Input weather={weather} setData={setData} setChange={setChange} />
      <Todos data={data} setChange={setChange} />
    </main>
  );
};

export default Main;
