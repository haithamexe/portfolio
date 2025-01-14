import { createPortal } from "react-dom";

function Portal2({ children }) {
  const portalRoot = document.getElementById("portal-2");
  if (!portalRoot) {
    console.error("Element with id 'portal-2' not found in the DOM");
    return null;
  }
  return createPortal(children, portalRoot);
}

export default Portal2;
