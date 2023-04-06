import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import products from "../../products";


function ProductDetailPage() {

  let { id } = useParams();
  console.log(id)

  let product = products.find((p)=> p._id === id)

  return (
    <div>
      {id}
    </div>
  );
}

export default ProductDetailPage;
