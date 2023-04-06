// this component will request an individual product from the backend
// path ("products/<str:pk>/", views.getProduct, name="product")
// via an axios get request. useState's setter function will be called in 
// the body of the useEffect to store the data in the product state value.
// the state value will be rendered as needed


import { Link, useParams, } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function ProductDetailPage() {

  let { id } = useParams();

  const [product, setProduct] = useState([]);


  useEffect(()=>{

    async function fetchProduct(){
      try {
        let { data } = await axios.get(`http://localhost:8000/api/products/${id}/`)
        setProduct(data)
        console.log("Individutal Product", data)     
      } catch (error) {
        console.log(error)       
      }     
    };
    fetchProduct();
  },[]);



  return (
    <div>
      {product.name}
    </div>
  );
}

export default ProductDetailPage;
