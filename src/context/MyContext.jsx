import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get("https://api.pexels.com/v1/curated", {
        headers: {
          Authorization:
            "RzYeCpD0EXFYKNLg9OSK5n0EDaqcxMXfPqw0Xwro2N729nHAyHJURDA0",
        },
      });
      setPhotos(response.data.photos);
    };
    fetchPhotos();
  });

  return <MyContext.Provider value={{ photos }}>{children}</MyContext.Provider>;
};
