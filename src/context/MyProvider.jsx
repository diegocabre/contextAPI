import axios from "axios";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import IconHeart from "../components/IconHeart";

export const MyProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get("https://api.pexels.com/v1/curated", {
        headers: {
          Authorization: "RzYeCpD0EXFYKNLg9OSK5n0EDaqcxMXfPqw0Xwro2N729nHAyHJURDA0",
        }
      });
      setPhotos(response.data.photos);
    };
    fetchPhotos();
  }, []);

  return (
    <MyContext.Provider value={photos}>
      {photos.map((photo, index) => (
        <img
          className="photo"
          key={index}
          src={photo.src.portrait}
          alt={photo.alt}

        />
      ))}
      {children}
    </MyContext.Provider>
  );
}