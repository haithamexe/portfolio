import { useEffect, useRef } from "react";
import { Item } from "../../utils/effectScript";
import "../../styles/effect.css";

function Effect({ effect }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const items = document.querySelectorAll(".grid__item");
    items.forEach((item) => new Item(item));
    console.log(items);

    // new Item(itemRef.current);
  }, []);

  return (
    <div>
      <div className={effect === "on" ? "grid" : "grid hide"}>
        <div className="grid__item">
          <div className="grid__item-img">
            <div className="grid__item-img-deco"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Effect;
