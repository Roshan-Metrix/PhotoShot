import React,{ useState, useEffect } from 'react';

type Img = {
  id: number;
  webformatURL: string;
  tags: string;
}

interface Props {
  searchQuery : string;
}

const ImageGallery: React.FC<Props> = ({ searchQuery }) => {
  const [images, setImages] = useState<Img[]>([]);

  const apikey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
    // Fetch data from API
    const fetchImages = async () => {
      await fetch(`https://pixabay.com/api/?key=${apikey}&q=${searchQuery}&image_type=photo`)
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
      });}
      fetchImages();
  }, [searchQuery]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {images.map((image: Img) => (
        <div key={image.id} className="w-full h-64 overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-gray-100">
          <img
            src={image.webformatURL}
            alt={image.tags}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-120"
          />
        </div>
      ))}
    </div>
  )};

  export default ImageGallery;
