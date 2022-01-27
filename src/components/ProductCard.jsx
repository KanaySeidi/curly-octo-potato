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
    >
      <CardMedia
        component="img"
        height="120"
        src={props.item.image}
        alt="animal-png"
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          style={{ height: 60, overflow: "hidden" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.item.name}
        </Typography>
        <hr />
        <Typography variant="body2" color="text.secondary">
          Порода: {props.item.breed}
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
            style={{ background: "gray" }}
          >
            Корзина
          </Button>
        )}
        <Link
          style={{ marginLeft: 20 }}
          to={`/product-detail/${props.item.id}`}
        >
          <Button
            size="small"
            variant="contained"
            style={{ background: "gray" }}
          >
            Подробнее
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
