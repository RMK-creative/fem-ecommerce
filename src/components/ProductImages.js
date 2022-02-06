import React from "react";
import "./productImages.css";
import Product1 from "../images/image-product-1.jpg";
import Product1Thumb from "../images/image-product-1-thumbnail.jpg";
import Product2Thumb from "../images/image-product-2-thumbnail.jpg";
import Product3Thumb from "../images/image-product-3-thumbnail.jpg";
import Product4Thumb from "../images/image-product-4-thumbnail.jpg";

export default function ProductImages() {
  return (
    <>
      <section className="product__images--container">
        <img className="product__image--main" src={Product1} />
        <div className="product__image__thumb--container">
          <img src={Product1Thumb} style={{ opacity: "0.5" }} />
          <img src={Product2Thumb} />
          <img src={Product3Thumb} />
          <img src={Product4Thumb} />
        </div>
      </section>
    </>
  );
}
