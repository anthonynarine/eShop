import HomePage from "./components/pages/HomePage";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import { Routes, Route } from "react-router-dom";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

import { Typography, Box, Stack, Container } from "@mui/material";

//FORM STYLE START\\
const appStyling = {
  container: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
};

function App() {
  return (
    <Box>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductDetailPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Box>
  );
}

export default App;
