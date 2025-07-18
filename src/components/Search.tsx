import React from 'react'

const Search = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = event.target.value;
        if (query) {
            console.log(`Searching for: ${query}`);
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter to Search . . ."
        className="w-[30%] text-[20px] h-10 rounded p-2 border-2 my-2 mx-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-none placeholder:text-[17px]"
        autoFocus
        />
        <input type="submit" value="Search"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
        />
  </form>
  )
}

export default Search