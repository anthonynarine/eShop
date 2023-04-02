import { Grid, Typography } from "@mui/material";
import Product from "./Product";
import products from "../../products";
import React from "react";

function HomePage() {
  return (
    <div>
      <Typography variant="h6">Latest Products</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product, index) => (
          <Grid key={product._id} item xs={2} sm={4} md={4} >
            <Product product={product} />

          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
