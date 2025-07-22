import { useState, useEffect } from 'react';

interface Image {
  id: number;
  urls: {
    small: string;
  };
  alt_description: string;
}

export const ImageGallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setImages(data); // You may need to map data to match the Image interface
  //     })
  //     .catch((error: Error) => {
  //       setError(error.message);
  //     });
  // }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.urls.small}
          alt={img.alt_description}
          className="rounded shadow-md"
        />
      ))}
      {error && <div>{error}</div>}
    </div>
  );
};
