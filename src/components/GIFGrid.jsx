import { useFetchGIFs } from "../hooks/useFetchGIFs";
import { GIFItem } from "./GIFItem";

export const GIFGrid = ({ category }) => {
  const { images, isLoading } = useFetchGIFs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h3 className="">Cargando...</h3>
      }
      <div className="card-grid">
        {images.map((image) => (
          <GIFItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
