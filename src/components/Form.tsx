import { useState } from 'react';
import  Search  from "./Search";
import  Buttons  from "./Buttons";
import  ImageGallery  from "./ImageGallery";

const Form: React.FC = () => {
  const [searchTerm,setSearchTerm] = useState<string>('');

  const handleSearchSubmit = (term:string) => {
    setSearchTerm(term);
  }

  const PhotoName = [
    "Mountain",
    "Birds",
    "Food",
    "Nature"
  ];
  return (
    <div className="flex justify-center items-center h-full w-full py-10 px-5">
      <div className="bg-gray-300 w-[90%] h-auto rounded-lg shadow-lg text-center p-8">
        <h1 className="text-4xl font-bold p-8">
          PhotoShot
        </h1>
        <Search onSearch={handleSearchSubmit} />
        {PhotoName.map((Name) => (
          <Buttons Name={Name} key={Name} Datas={handleSearchSubmit} />
        ))}
        <ImageGallery searchQuery={searchTerm} />
      </div>
    </div>
  );
};

export default Form;
