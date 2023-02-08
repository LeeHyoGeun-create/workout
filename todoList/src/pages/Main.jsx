import React from 'react';
import Input from '../components/Input';

const Main = ({ setData, weather }) => {
  return (
    <main>
      <Input weather={weather} setData={setData} />
    </main>
  );
};

export default Main;
