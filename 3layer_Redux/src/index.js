import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Cart from "./components/cart/cart"
import Admin from './components/admin/admin'
import { bootstrap } from "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import rootReducer from './redux/reducer'
import { createStore , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk));
console.log("index.js below store")
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <nav className="navbar navbar-light bg-light">
      <NavLink activeStyle={{ color: "red" }} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={{ color: "red" }} exact to="/cart">
        Cart
      </NavLink>
      <NavLink activeStyle={{ color: "red" }} exact to="/admin">
        Admin
      </NavLink>
    </nav>
    <Route path="/" exact component={App} />
    <Route path="/cart" exact component={Cart} />
    <Route path="/admin" exact component={Admin} />
    

  </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
