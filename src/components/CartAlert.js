import React from "react";
import "./cartAlert.css";

export default function CartAlert(props) {
  const { counter } = props;

  return (
    <div>
      <button className="cartAlert">{counter}</button>
    </div>
  );
}
