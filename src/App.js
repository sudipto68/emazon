import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import OrderReview from "./components/OrderReview/OrderReview";
import Manage from "./components/ManageInventory/Manage";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="/manage">
            <Manage />
          </Route>
          <Route to="/product/:productkey">
            <ProductDetail />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
