import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Badge,
  Button,
} from "@mui/material";


let StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});


function Footer() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="caption" sx={{ display: { xs: "none", sm: "block" } }}>
          Copyright<span> &copy;</span> eShop
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
}

export default Footer;
