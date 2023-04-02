import React from 'react'
import { Link,  useNavigate } from "react-router-dom";
import { Card, CardMedia, CardActions, CardContent, Button, Typography } from '@mui/material'


function Product({ product }) {

  // let navigate = useNavigate();

  // let navigator = ()=> {
  //   navigate(`/products/${product._id}`)
  // };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 240 }}
      image={product.image}
      title="product"
    />
    <CardContent>
    <Typography gutterBottom variant="subtitle2" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.rating} from {product.numReviews}
      </Typography>
      <Typography sx={{marginTop:3}} variant="h6" color="black">
        ${product.price} 
      </Typography>
    </CardContent>

  </Card>
  )
}

export default Product


