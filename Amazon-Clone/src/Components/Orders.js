import React, { useState, useEffect } from "react";
import { db } from "../States/firebase";
import { collection, onSnapshot, doc, query, orderBy } from "firebase/firestore";
import "../Styles/Orders.css";
import { useStateValue } from "../States/StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // db.collection("users") //accessing users DB
      //   .doc(user?.uid) //Getting specific user logged in
      //   .collection("orders") //Accessing that users order
      //   .orderBy("created", "desc") // orders in db orders arrange desc
      //   .onSnapshot((snapshot) => {
      //     //Realtime snapshot of Database
      //     setOrders(
      //       //Going to all orders
      //       snapshot.docs.map((doc) => ({
      //         id: doc.id, // set order id
      //         data: doc.data(), //Set all order data
      //       }))
      //     );
      //   });
      const paymentRef = doc(collection(db, "users"), user?.uid);
      const paymentRef2 = collection(paymentRef, "orders");
      const q = query(paymentRef2, orderBy("created", "desc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          //Going to all orders
          snapshot.docs.map((doc) => ({
            id: doc.id, // set order id
            data: doc.data(), //Set all order data
          }))
        );

      });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <img src="https://mamaearthp.imgix.net/wysiwyg/desktop_home_img.jpg?auto=format" alt="/" height="200" width="1400" />
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div >
  );
}

export default Orders;
