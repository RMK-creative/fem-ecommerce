import React from "react";
import "./productCopy.css";
import Counter from "./Counter";
import Button from "./Button";

export default function ProductCopy(props) {
  const {
    itemDiscountPrice,
    itemPrice,
    addToCart,
    clickMinus,
    clickPlus,
    counter,
  } = props;

  return (
    <section className="product__copy">
      <h1 className="product__heading-main">Sneaker Company</h1>
      <h2 className="product__heading-sub">Fall Limited Edition Sneakers</h2>
      <p className="product__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <p className="product__price" style={{ fontSize: "28px" }}>
        {`$${itemDiscountPrice}`} <span>{`50%`}</span>
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "#B6BCC8",
          textDecoration: "line-through",
        }}
      >
        {`$${itemPrice}`}
      </p>
      <div className="button__container">
        <Counter
          clickMinus={clickMinus}
          clickPlus={clickPlus}
          counter={counter}
        />
        <Button
          addToCart={addToCart}
          counter={counter}
          buttonText="Add to Cart"
        />
      </div>
    </section>
  );
}
