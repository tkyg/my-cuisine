import { Routes, Route } from 'react-router-dom';
import RestaurantCard from "./Restaurants/RestaurantCard";
import RestaurantForm from "./Restaurants/RestaurantForm";
import RestaurantsContainer from "../Containers/RestaurantsContainer";
import NavBar from "./Navigation/NavBar"
import Header from "./Navigation/Header"
import Footer from "./Navigation/Footer"
import About from "./About";
import Home from "./Home"


function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <NavBar />
      <Header slogan="Cuisine and Neighborhood" appName="My Cuisine" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="new" element={<RestaurantForm />} />
          <Route path=":id" element={<RestaurantCard />} />
          <Route path="/restaurants" element={<RestaurantsContainer />} />
          {/* <Route index element={<Home />} /> */}
        </Routes>
      <Footer />
      
    </div>
  );
}

export default App;

