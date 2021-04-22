import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer"

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import MainScreen from "./screens/MainScreen";
import ContactScreen from "./screens/ContactScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
// import 

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/allProducts" component={AllProductsScreen} />
          <Route exact path="/product" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/contact" component={ContactScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
