import React from "react";
import "../Styles/ProductList.css";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useStateValue } from "../States/StateProvider";

function ProductList({
  productList: { id, title, price, description, category, image, rating },
  i,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = ({ productList, id, title, image, price, rating }) => {
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
      <Button variant="contained" onClick={addToBasket}>Add to Basket</Button>
    </div>
  );
}

export default ProductList;
