import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./States/firebase";
import { useStateValue } from "./States/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";
import Footer from "./Components/Footer";
import Register from "./Components/Register";
import alanBtn from "@alan-ai/alan-sdk-web";
import ProductLists from "./Components/ProductLists";

const promise = loadStripe(
  "pk_test_51KOQduSGmnjRVw8zzEqsZnar3q8fR32rfk8d5xEDXIWLx4Z49j1tlBJja3kaEw1vR5gkU3bvClSE9333Sg72xIyJ00N0sU6nS1"
);

function App() {
  //contect API
  const [{ }, dispatch] = useStateValue();
  const [allProductList, setAllProductList] = useState([]);

  useEffect(() => {
    //It will only run once when the app component loads

    const alanKey =
      "55eb76a3057fcd338bfd886a91be72b92e956eca572e1d8b807a3e2338fdd0dc/stage";

    alanBtn({
      key: alanKey,
      onCommand: ({ command, productList }) => {
        if (command === "newProducts") {
          console.log(productList);
          setAllProductList(productList);
        }
      },
    });

    //Attach this listner after load
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          //fire of event and shoot event into datalayer
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        // The user is logged out
      }
    });
  }, []);

  return (
    // BEM

    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>}
          />
          <Route path="/product" element={<ProductLists productLists={allProductList} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
