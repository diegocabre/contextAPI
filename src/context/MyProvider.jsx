import axios from "axios";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";

export const MyProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get("../public/photos.json");
      setPhotos(response.data.photos);
    };
    fetchPhotos();
  }, []);

  return (
    <MyContext.Provider value={photos}>
      <div className="gallery grid-columns-4 grid gap-4 p-3 m-3 grid-rows-4 grid-flow-col auto-rows-max auto-cols-max auto-flow ">
        {photos.map((photo, index) => (
          <img
            className="photo"
            key={index}
            src={photo.src.portrait}
            alt={photo.alt}
          />
        ))}
      </div>
      {children}
    </MyContext.Provider>
  );
};
