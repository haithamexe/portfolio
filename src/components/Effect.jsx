import { useEffect, useRef } from "react";
import { Item } from "../utils/effectScript.js";
import "../styles/effect.css";

function Effect() {
  const itemRef = useRef(null);

  useEffect(() => {
    const items = document.querySelectorAll(".grid__item");
    items.forEach((item) => new Item(item));
    console.log(items);

    // new Item(itemRef.current);
  }, []);

  return (
    <div>
      <div className="grid">
        <div className="grid__item">
          <a className="grid__item-img">
            <div className="grid__item-img-deco"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Effect;
