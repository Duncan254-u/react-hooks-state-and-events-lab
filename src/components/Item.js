import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart((prevState) => !prevState);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleAddToCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
