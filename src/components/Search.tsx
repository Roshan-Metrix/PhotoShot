import React, { useState } from 'react';
import type { FormEvent } from 'react';

interface Props {
  onSearch : (term:string) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if(search.trim()){
    onSearch(search);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter to Search . . ."
        className="w-[30%] text-[20px] h-10 rounded p-2 border-2 my-2 mx-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-none placeholder:text-[17px]"
        autoFocus
      />
      <input
        type="submit"
        className="bg-blue-500 text-white px-6 py-[9px] mx-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
      />
    </form>
  );
};

export default Search;