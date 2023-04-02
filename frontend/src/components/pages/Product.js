import React from 'react'
import { Link } from "react-router-dom"
import { Card, CardMedia, CardActions, CardContent, Button, Typography } from '@mui/material'





function Product({ product }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={product.image}
      title="product"
    />
    <CardContent>
      <Link  ><Typography gutterBottom variant="subtitle2" component="div">
        {product.name}
      </Typography></Link>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default Product
