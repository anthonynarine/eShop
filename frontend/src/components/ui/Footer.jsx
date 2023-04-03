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
  Paper
} from "@mui/material";


let StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  height:"80px",
});


function Footer() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Paper sx={{backgroundColor: "#353A40", color:"white"}} elevation={24}><Typography variant="caption" sx={{ display: { xs: "none", sm: "block" } }}>
          Copyright<span> &copy;</span> eShop
        </Typography></Paper>
      </StyledToolbar>
    </AppBar>
  );
}

export default Footer;
