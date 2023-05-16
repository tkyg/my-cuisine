import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from "../styles/Container"
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyle';
import RestaurantCard from "./restaurants/RestaurantCard";
import RestaurantForm from "./restaurants/RestaurantForm";
import NavBar from "./navigation/NavBar"
import Header from "./navigation/Header"
import Footer from "./navigation/Footer"
import About from "./About";
import Home from "./Home"
import RestaurantList from './restaurants/RestaurantList';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  }, 
  mobile: '768px',
}

function App() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch("https://backend-my-cuisine.herokuapp.com/restaurants")
    // fetch("http://localhost:3001/restaurants")
    .then(response => response.json())
    .then((data) => {
      setRestaurants(data)
      })
  }, [])

   const addNewRestaurant = (newRestaurant) => {
    setRestaurants((restaurantObj) => [...restaurantObj, newRestaurant]);
  };

  const handleUpvotes = (id) => {
    const updatedRestaurants = restaurants.map(restaurant => {
      if (restaurant.id === id){
        return {
          ...restaurant,
          upvotes: restaurant.upvotes + 1
        }
      }
      return restaurant
    })
    setRestaurants(updatedRestaurants)
  }


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
            <Route path="new" element={<RestaurantForm addNewRestaurant={addNewRestaurant}/>} />
            <Route path=":id" element={<RestaurantCard />} />
            <Route path="/restaurants" element={<RestaurantList restaurants={restaurants} handleUpvotes={handleUpvotes}/>} />
          </Routes>
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

