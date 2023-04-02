import HomePage from './components/pages/HomePage';

import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

import { Typography, Box, Stack, Container } from '@mui/material';


//FORM STYLE START\\
const appStyling = {
  container: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex", 
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
};



function App() {
  return (
    <Box>
      <Header/>
      <main >
        <Container>
          < HomePage />
        </Container>
      </main>
      <Footer/>
    </Box>

  );
}

export default App;
