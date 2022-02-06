import React from "react";
import "./button.css";

export default function Button(props) {
  const { addToCart, buttonText } = props;

  return (
    <>
      <button className="button" type="button" onClick={addToCart}>
        {buttonText}
      </button>
    </>
  );
}
