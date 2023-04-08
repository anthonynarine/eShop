// this component will request an individual product from the backend
// path ("products/<str:pk>/", views.getProduct, name="product")
// via an axios get request. useState's setter function will be called in
// the body of the useEffect to store the data in the product state value.
// the state value will be rendered as needed

import { useParams, useNavigate } from "react-router-dom";
import { Typography,styled, Button, Grid, List, ListItem,Paper} from "@mui/material";
import { useState, useEffect } from "react";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";

import StarRating from "./Rating";
import axios from "axios";

let BackButton = styled(Button)({
  paddingTop: 2,
  paddingBottom: 4,
  marginBottom: 10,
  marginTop: 15,
  fontSize: 20,
  fontWeight: "normal",
  // fontWeight:100,
  color: "black",
  variant: "contained",
});

let AddToCartBtn = styled(Button)({
  paddingTop: 3,
  width:"70%",
  backgroundColor:"#353A40",
  paddingBottom: 4,
  fontSize: 15,
  fontWeight: "normal",
  // fontWeight:100,
  color: "#fff",
  variant: "contained",
  boxShadow: "5px 5px 10px #ccc",
  ":hover": {
    boxShadow: "10px 10px 20px #060606",
  },
  "&:hover": {
    backgroundColor: "#f96d00",
    color: "#1f2124",
  },
});


function ProductDetailPage() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        let { data } = await axios.get(
          `http://localhost:8000/api/products/${id}/`
        );
        setProduct(data);
        console.log("Individutal Product", data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      <BackButton
        startIcon={<ChevronLeftSharpIcon />}
        varient="contained"
        onClick={() => navigate("/")}
      >
        Go Back
      </BackButton>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {/* <Paper elevation={24}> */}
          <img
            style={{ maxWidth: "100%" }}
            src={product.image}
            alt={product.name}
          />
        {/* </Paper> */}
        </Grid>

        <Grid item xs="none" md={3}>
          {/* <Paper elevation={24}> */}
          <List sx={{ width: "100%" }}>
            <ListItem>
              <Typography variant="h6">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <StarRating />
            </ListItem>
            <ListItem>
              <Typography>
                <strong>Price</strong> ${product.price}
              </Typography>
            </ListItem>
            <ListItem>
              <Paper elevation={5} sx={{padding:1.5}}><Typography>
                <strong>Description:</strong> {product.description}
              </Typography></Paper>
            </ListItem>
          </List>
          {/* </Paper> */}
        </Grid>
        <Grid item xs="none" md={3}>
          <List sx={{ width: "100%" }}>
            <ListItem>
              <Typography>
                <strong>Status: </strong>
                {product.countInStock > 0 ? "in Stock" : "Out Of Stock"}
              </Typography>
            </ListItem>
            <ListItem>
              <AddToCartBtn>add to cart</AddToCartBtn>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductDetailPage;
