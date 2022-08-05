
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
      <Router>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/restaurants/new">
            <RestaurantForm />
          </Route>

          <Route path="/restaurants/:id">
            <RestaurantCard />
          </Route>

          <Route path="/restaurants">
            <RestaurantsContainer />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

