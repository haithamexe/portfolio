import { useState, useEffect, createContext, useContext } from "react";
import { getPhotos } from "../utils/api";

export const PhotosContext = createContext();

export const usePhotosContext = () => {
  return useContext(PhotosContext);
};

export const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPhotos()
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos: ", error);
      });
  }, []);

  return (
    <PhotosContext.Provider value={{ photos, isLoading }}>
      {children}
    </PhotosContext.Provider>
  );
};
