import axios from "axios";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import IconHeart from "../components/IconHeart";

export const MyProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get("../public/photos.json");
      setPhotos(response.data.photos);
    };
    fetchPhotos();
  }, []);

  const addFavorite = (photo) => {
      if (photos.includes(photo)) {
        setPhotos(photos.filter((p) => p !== photo));
      } else {
        setPhotos([...photos, photo]);
      }
  }

  return (
    <MyContext.Provider value={photos}>
      {photos.map((photo, index) => (
        <IconHeart
          className="photo"
          key={index}
          src={photo.src.portrait}
          alt={photo.alt}
        />
      ))}
      {children}
    </MyContext.Provider>
  );
};
