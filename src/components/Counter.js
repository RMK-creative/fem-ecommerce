import React from "react";
import "./counter.css";

export default function Counter(props) {
  const { clickMinus, clickPlus, counter } = props;

  return (
    <div className="counter__container">
      <button className="counter__minus counter__icon" onClick={clickMinus}>
        <span className="counter__minus">-</span>
      </button>
      <span className="counter__number">{counter}</span>
      <button className="counter__plus counter__icon" onClick={clickPlus}>
        <span className="counter__plus">+</span>
      </button>
    </div>
  );
}
