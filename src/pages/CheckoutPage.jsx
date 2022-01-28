import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const CheckoutPage = () => {
  return (
    <div>
      <h2>CheckoutPage</h2>

      <div className="checkoutPage-fields">
        <TextField
          label="Full Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />

        <TextField
          label="Phone Number"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          type="number"
        />

        <TextField
          label="Card Number"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          type="number"
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
