//This component is rendered in the HomePage component. It bring in a single product
// that is mapped out in the home page as props. That individual product will then be 
// displayed on a card as shown below. Each card will Link to a product detail page 
// for additional information on the specific product. 


import React from "react";
import {useNavigate } from "react-router-dom";
import {Card,CardMedia,CardContent,Typography,} from "@mui/material";
import StarRating from "../ui/Rating";


const CardStyles = {
  card: {
    maxWidth: 345,
    cursor: "pointer",
    borderRadius: 0,
    boxShadow: "5px 5px 10px #ccc",
    ":hover": {
      boxShadow: "10px 10px 20px #060606",
    },
  },
};

function Product({ product }) {
  let navigate = useNavigate();

  let navigateTo = ()=> {
    navigate(`/products/${product._id}`)
  };

  return (
    <Card sx={CardStyles.card}>
      <CardMedia onClick={navigateTo} sx={{ height: 240 }} image={product.image} title="product" />
      <CardContent>
        <Typography onClick={navigateTo} sx={{cursor: "pointer"}} gutterBottom variant="subtitle2" component="div">
          {product.name}
        </Typography>
        <StarRating
          value={product.rating}
          text={`${product.numReviews} reviews`}
          color={"#f8e825"}
        />
        <Typography sx={{ marginTop: 3 }} variant="h6" color="black">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Product;
