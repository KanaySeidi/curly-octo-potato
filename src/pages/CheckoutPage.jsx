import { Button, Container, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div>
      <h2>CheckoutPage</h2>
      <Container>
        <div className="checkoutPage-fields">
          <TextField
            label="Full Name"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />

          <TextField
            label="Phone Number"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            type="number"
          />

          <TextField
            label="Card Number"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            type="number"
          />
          <TextField
            label="MM/YY EXPIRY"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            type="number"
          />
          <TextField
            label="CVC"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            type="number"
          />
          <Link to="/checkout/welcome">
            <Button size="small" variant="contained" color="success">
              Купить
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
