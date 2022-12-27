import React from "react";
import "../Styles/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../States/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "../States/Reducer";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images.ctfassets.net/66mrrren2unf/5p5pVTewrOIcFmKeO0vbEP/daaa29aecfbf7c835065ccce730c0e78/WOW_WEBSITE-_1920x512_.jpg?q=40"
          alt=""
        />
        <h1 className="checkout__title">Your shopping Basket</h1>
        <div className="subBasket">
          <FlipMove>
            {basket.map((item, index) => (
              <div key={index}>
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            ))}
          </FlipMove>
          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>
      </div>

    </div >
  );
}

export default Checkout;