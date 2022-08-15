import { Routes, Route } from 'react-router-dom';
import { Container } from "../styles/Container"
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyle';
import RestaurantCard from "./restaurants/RestaurantCard";
import RestaurantForm from "./restaurants/RestaurantForm";
import RestaurantsContainer from "../containers/RestaurantsContainer";
import NavBar from "./navigation/NavBar"
import Header from "./navigation/Header"
import Footer from "./navigation/Footer"
import About from "./About";
import Home from "./Home"

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  }, 
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
      <GlobalStyles />
        <NavBar />
        <Header slogan="Cuisine and Neighborhood" appName="My Cuisine" />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="new" element={<RestaurantForm />} />
            <Route path=":id" element={<RestaurantCard />} />
            <Route path="/restaurants" element={<RestaurantsContainer />} />
          </Routes>
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

