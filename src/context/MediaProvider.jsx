import { useEffect, useState, createContext, useContext } from "react";
import { projects } from "../utils/projects";
import { buttonsArrays } from "../utils/buttonsArrays";

const MediaContext = createContext();

export const useMediaContext = () => {
  return useContext(MediaContext);
};

const preloadMedia = (paths) => {
  const mediaObj = {};
  paths.map((path) => {
    if (path.endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = path;
      mediaObj[path] = video;
    } else {
      const img = new Image();
      img.src = path;
      mediaObj[path] = img;
    }
  });

  return mediaObj;
};

const projectMediaPaths = projects.flatMap((project) =>
  [project.image, project.video].filter(Boolean)
);

console.log(projectMediaPaths);

const buttonImagePaths = buttonsArrays.flatMap((button) =>
  [button.image].filter(Boolean)
);

const preloadedMedia = preloadMedia([
  ...projectMediaPaths,
  ...buttonImagePaths,
]);

function MediaProvider({ children }) {
  const [media, setMedia] = useState({});

  useEffect(() => {
    setMedia(preloadedMedia);
  }, []);

  return (
    <MediaContext.Provider value={{ media }}>{children}</MediaContext.Provider>
  );
}

export default MediaProvider;
