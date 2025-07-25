import { useState, useEffect } from 'react';

interface Img {
  id: number;
  webformatURL: string;
  tags: string;
}

const apiURL = import.meta.env.VITE_API_URL;

export const ImageGallery = () => {
  const [images, setImages] = useState<Img[]>([]);

    useEffect(() => {
    // Fetch data from API
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then((data) => {
        setImages(data.hits);
      })
      .catch((error) => {
        console.log(error.message)
      });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {images.map((image: Img) => (
        <div key={image.id} className="w-full h-64 overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-gray-100">
          <img
            src={image.webformatURL}
            alt={image.tags}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )};
