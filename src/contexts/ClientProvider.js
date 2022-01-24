import React, { useReducer } from "react";
import axios from "axios";
import { API } from "../helpers/const";

export const ClientContext = React.createContext();

const INIT_STATE = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ClientProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const responce = await axios(`${API}/${window.location.search}`);
      let action = {
        type: "GET_PRODUCTS",
        payload: responce.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ClientContext.Provider value={{ getProducts, products: state.products }}>
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
