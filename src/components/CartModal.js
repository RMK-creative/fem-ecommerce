import React from "react";
import product1 from "../images/image-product-1-thumbnail.jpg";
import trash from "../images/icon-delete.svg";
import "./cartModal.css";
import Button from "./Button";

export default function CartModal(props) {
  const {
    counter,
    deleteCart,
    itemsInCart,
    itemPrice,
    itemDiscountPrice,
    checkoutCart,
  } = props;
  console.log(checkoutCart);

  return (
    <section className="cart__container">
      <div className="cart__nav">
        <h2 className="cart__header">Cart</h2>
      </div>

      {!itemsInCart || counter <= 0 ? (
        <div>
          <p className="cart__empty">Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart__content">
          <img className="cart__image" src={product1} />
          <div className="cart__text">
            <h2 className="cart__title">Fall Limited Edition Sneakers</h2>
            <p>
              <span>
                {itemDiscountPrice == 0 ? itemPrice : itemDiscountPrice}{" "}
              </span>{" "}
              x{counter}
              <span className="cart__total">{`$${
                itemDiscountPrice == 0
                  ? itemPrice * counter
                  : itemDiscountPrice * counter
              }`}</span>
            </p>
          </div>

          <button className="cart__delete-btn" onClick={deleteCart}>
            <img src={trash} />
          </button>
        </div>
      )}
      <Button buttonText="Checkout" onClick={checkoutCart} />
    </section>
  );
}
