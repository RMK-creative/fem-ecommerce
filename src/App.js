import "./App.css";
import Navigation from "./components/Navigation";
import ProductImages from "./components/ProductImages";
import ProductCopy from "./components/ProductCopy";
import CartModal from "./components/CartModal";
import CartAlert from "./components/CartAlert";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [cartModalisOpen, setCartModalIsOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(false);
  const [itemPrice, setItemPrice] = useState(250);
  const [itemDiscountPrice, setItemDiscountPrice] = useState(125);

  function handleCounterPlusClick() {
    setCounter(counter + 1);
  }

  function handleCounterMinusClick() {
    counter > 0 ? setCounter(counter - 1) : setCounter(0);
  }

  function handleAddToCart() {
    if (counter > 0) setItemsInCart(true);
  }

  function handleToggleCartModal() {
    cartModalisOpen ? setCartModalIsOpen(false) : setCartModalIsOpen(true);
  }

  function handleDeleteCart() {
    setItemsInCart(false);
    setCounter(0);
  }

  function handleCheckoutCart() {
    setItemsInCart(false);
    setCounter(0);
  }

  return (
    <div className="App">
      <Navigation
        cartModalisOpen={cartModalisOpen}
        toggleCartModal={handleToggleCartModal}
      />
      <main>
        <section>
          <ProductImages />
        </section>
        <section>
          <ProductCopy
            itemDiscountPrice={itemDiscountPrice}
            itemPrice={itemPrice}
            addToCart={handleAddToCart}
            clickMinus={handleCounterMinusClick}
            clickPlus={handleCounterPlusClick}
            counter={counter}
          />
        </section>

        {counter > 0 && itemsInCart == true ? (
          <CartAlert counter={counter} />
        ) : null}
        {cartModalisOpen ? (
          <CartModal
            counter={counter}
            deleteCart={handleDeleteCart}
            itemsInCart={itemsInCart}
            itemPrice={itemPrice}
            itemDiscountPrice={itemDiscountPrice}
            checkoutCart={handleCheckoutCart}
          />
        ) : null}
      </main>
    </div>
  );
}

export default App;
