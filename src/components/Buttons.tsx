import React from 'react'

const Buttons = ( { Name }) => {
  return (
    <button className="mx-4 my-2 py-1 px-4 bg-neutral-800 text-white rounded hover:bg-blue-600 transition duration-300 cursor-pointer">{ Name }</button>
  )
}

export default Buttons