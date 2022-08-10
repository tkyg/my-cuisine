
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RestaurantCard from "./restaurants/RestaurantCard";
import RestaurantForm from "./restaurants/RestaurantForm";
import RestaurantsContainer from "../containers/RestaurantsContainer";
import NavBar from "./navigation/NavBar"
import Header from "./navigation/Header"
import Footer from "./navigation/Footer"
import About from "./About";
import Home from "./Home"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header slogan="Cuisine and Neighborhood" appName="My Cuisine" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="new" element={<RestaurantForm />} />
          <Route path=":id" element={<RestaurantCard />} />
          <Route path="/restaurants" element={<RestaurantsContainer />} />
          <Route index element={<Footer />} />
        </Routes>
      <Footer />
      
    </div>
  );
}

export default App;

