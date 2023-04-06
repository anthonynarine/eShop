// this component will serve as the HomePage. It will render out a list of products
// and render the Product component which will be a card with each products' details

import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Product from "./Product";
import React from "react";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);

  //useEffect effect will trigger ever single time the component loads
  useEffect(() => {
    // console.log("useEffect triggered")
    async function fetchProducts() {
      try {
        let { data } = await axios.get("http://localhost:8000/api/products/");
        console.log("DATA", data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <Typography
        sx={{ paddingTop: 2, paddingBottom: 2, fontSize: 20, display: "flex" }}
        variant="overline"
      >
        Latest Products
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product, index) => (
          <Grid key={product._id} item xs={2} sm={4} md={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
