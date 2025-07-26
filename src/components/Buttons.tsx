import React from 'react';

interface Props{
  Name : string;
  Datas : (Name: string) => void;
}

const Buttons:React.FC<Props> =({ Name, Datas }) => {
  return (
    <button onClick={() => Datas(Name)}className="mx-4 my-5 my-2 py-2 px-4 bg-neutral-800 text-white rounded hover:bg-blue-600 transition duration-300 cursor-pointer">
      {Name}</button>
  );
};

export default Buttons;