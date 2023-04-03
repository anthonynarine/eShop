import React from 'react'
import { Link,  useNavigate } from "react-router-dom";
import { Card, CardMedia, CardActions, CardContent, Button, Typography } from '@mui/material'


const CardStyles = {
  card: {
    maxWidth: 345,
    borderRadius: 0,
    boxShadow: "5px 5px 10px #ccc",
    ":hover": {
      boxShadow: "10px 10px 20px #060606",
    },
  },
};



function Product({ product }) {

  // let navigate = useNavigate();

  // let navigator = ()=> {
  //   navigate(`/products/${product._id}`)
  // };
  
  return (
    <Card sx={CardStyles.card}>
    <CardMedia
      sx={{ height: 240 }}
      image={product.image}
      title="product"
    />
    <CardContent>
    <Typography gutterBottom variant="subtitle2" component="div">
        {product.name}
      </Typography>
      <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"} />
      <Typography sx={{marginTop:3}} variant="h6" color="black">
        ${product.price} 
      </Typography>
    </CardContent>

  </Card>
  )
}

export default Product


