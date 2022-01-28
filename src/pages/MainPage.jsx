import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { ClientContext } from "../contexts/ClientProvider";
import FiltersBlock from "../components/FilterBlock";
import mainHeader from "../videos/main-header.mp4";
import ProductsPagination from "../components/ProductPagination";

const MainPage = () => {
  const { getProducts, products } = useContext(ClientContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading ... ... ...</h2>;
  }

  return (
    <div className="main-page-video">
      <Container>
        <h2 style={{ color: "white" }}>Main Page</h2>
        <video className="main-video" autoPlay loop muted>
          <source src={mainHeader} type="video/mp4" />
        </video>
        <FiltersBlock />
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid xs={12} sm={6} md={4} item key={item.id}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
        <ProductsPagination />
      </Container>
    </div>
  );
};

export default MainPage;
