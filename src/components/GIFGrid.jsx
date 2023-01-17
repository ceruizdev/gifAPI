import { useEffect, useState } from "react";
import { getGIFs } from "../helpers/GetGIFs";
import { GIFItem } from "./GIFItem";

export const GIFGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGIFs(category)
      .then((values) => {
        setImages(values);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GIFItem 
            key={image.id} 
            {...image} 
          />
        ))}
      </div>
    </>
  );
};
