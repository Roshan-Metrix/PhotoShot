import React from "react";
import Search from "./Search";
import Buttons from "./Buttons";
import ImageGallery from "./ImageGallery";

const Form = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className=" bg-gray-300 w-[80%] h-[80%] rounded-lg shadow-lg text-center ">
        <h1 className="text-3xl font-bold p-4">
          PhotoShot
        </h1>
        <Search />
        <Buttons Name="Mountain" />
        <Buttons Name="Birds" />
        <Buttons Name="Food" />
        <Buttons Name="Nature" />
        <ImageGallery />
      </div>
    </div>
  );
};

export default Form;
