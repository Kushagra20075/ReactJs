import React from "react";
import "../Styles/Product.css";
import { useStateValue } from "../States/StateProvider";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

function Product({ productList, id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const x = 0;
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="" />
      <Button className="addToBasket" onClick={addToBasket}>Add to Basket</Button>

      <div></div>
    </div>
  );
}

export default Product;