import { MyContext } from "../context/MyContext";
import { useContext } from "react";
import "./Gallery.css";

export const Gallery = () => {
  const { photos } = useContext(MyContext);

  return (
    <div className="gallery grid-columns-5 p-3 gap-3 grid grid-cols-5 grid-rows-3 md:grid md:grid-cols-5 md:grid-rows-3 ">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.src.large}
          alt={photo.photographer}
          className="photo"
        />
      ))}
    </div>
  )
}
