import React, { useState,useEffect } from 'react'
import axios from 'axios';

const ImageGallery = () => {
   const [images, setImages] = useState([]);
   const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
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
    </div>
  )
}

export default ImageGallery