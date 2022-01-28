import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

export default function ProductCard(props) {
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    React.useContext(ClientContext);

  return (
    <Card
      sx={{ maxWidth: 345, background: "transparent" }}
      className="main-card"
      height="100"
      width="80"
    >
      <CardMedia
        component="img"
        height="210"
        src={props.item.image}
        alt="animal-png"
        style={{ objectFit: "cover", objectPosition: "center -50px" }}
      />
      <CardContent>
        <Typography
          style={{ height: 60, overflow: "hidden" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.item.breed}
        </Typography>
        <hr />
        <Typography variant="body2" color="text.secondary">
          <br />
          Цена: {props.item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {checkProductInCart(props.item.id) ? (
          <Button
            onClick={() => deleteProductFromCart(props.item.id)}
            size="small"
            variant="contained"
            color="warning"
          >
            В Корзине
          </Button>
        ) : (
          <Button
            onClick={() => addProductToCart(props.item)}
            size="small"
            variant="contained"
            color="success"
          >
            Корзина
          </Button>
        )}
        <Link
          style={{ marginLeft: 20 }}
          to={`/product-detail/${props.item.id}`}
        >
          <Button size="small" variant="contained" color="success">
            Подробнее
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
