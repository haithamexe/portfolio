import { useEffect, createContext, useContext } from "react";
import { projects } from "../utils/projects";
import { buttonsArrays } from "../utils/buttonsArrays";

const MediaContext = createContext();

export const useMediaContext = () => {
  return useContext(MediaContext);
};

const preloadMedia = (paths) => {
  const extension = paths[0].split(".").pop();
  paths.map((path) => {
    if (extension === "mp4") {
      const video = document.createElement("video");
      video.src = path;
    } else {
      const img = new Image();
      img.src = path;
    }
  });
};

const projectMediaPaths = projects.flatMap((project) =>
  [project.image, project.video].filter(Boolean)
);

const buttonImagePaths = buttonsArrays.flatMap((button) =>
  [button.image].filter(Boolean)
);

function MediaProvider({ children }) {
  useEffect(() => {
    preloadMedia([...projectMediaPaths, ...buttonImagePaths]);
  }, []);

  return <MediaContext.Provider value={{}}>{children}</MediaContext.Provider>;
}

export default MediaProvider;
