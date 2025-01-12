import { createPortal } from "react-dom";

function Portal({ children }) {
  const portalRoot = document.getElementById("portal");
  if (!portalRoot) {
    console.error("Element with id 'portal' not found in the DOM");
    return null;
  }
  return createPortal(children, portalRoot);
}

export default Portal;
