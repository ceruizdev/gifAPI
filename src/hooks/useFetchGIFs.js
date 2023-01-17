import { useEffect, useState } from "react";
import { getGIFs } from "../helpers/GetGIFs";

export const useFetchGIFs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getGIFs(category)
      .then((values) => {
        setImages(values);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    images,
    isLoading
  };
};
