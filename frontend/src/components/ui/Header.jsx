import {AppBar,Box,Toolbar,Typography,styled,InputBase,Badge,Button,} from "@mui/material";
import { Storefront, ShoppingCart, } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import React from "react";

let StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

let Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

let Icons = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"20px",
    alignItems:"center"
//   backgroundColor: "white",
}));

function Header() {

    let navigate = useNavigate();
  
    let navigateTo = ()=> {
      navigate("/login")
    };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          eShop
        </Typography>
        <Storefront sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons>
          <Badge sx={{marginTop:1.2}}badgeContent={2} color="error">
            <ShoppingCart />
          </Badge>
        <Button onClick={navigateTo}  sx={{color:"white"}} >Login</Button>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;


