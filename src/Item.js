  
import React from "react";

export default function Item(props) {
  return (
    <div className="item">
      <img height="50" width="50" alt="item"/>
      <div className="item-middle">
        <div className="item-name">{props.item.name}</div>
        <div>{props.item.description}</div>
      </div>
      <div className="item-end">
        <div>${props.item.price}</div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}