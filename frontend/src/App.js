import Header from './components/ui/Header';
import './App.css';
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




// .App-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }

function App() {
  return (
    <Box>
      <Header/>
      <main >
        <Container>

        <Typography variant='h1' >Welcome</Typography>
        </Container>
      </main>
      <Header/>
    </Box>

  );
}

export default App;
