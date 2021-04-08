
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddBooks from "./components/AddBooks/AddBooks";
import Admin from "./components/Admin/Admin";
import Book from "./components/Book/Book";
import Deals from "./components/Deals/Deals";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import CheckOut from "./components/CheckOut/CheckOut";

//need to export so that every component can access it
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    //wrapping everything in UserContext with the value so that it's accessible
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <div className="App">
      <Router>
        {/* To access header from every page it needs to be under the router */}
        <Header></Header>
        <Switch>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <PrivateRoute path = "/orders">
            <Orders></Orders>
          </PrivateRoute>
          
          <Route path = "/deals">
            <Deals></Deals>
          </Route>
          
          {/* first make a PrivateRoute component */}
          <PrivateRoute path = "/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path = "/addBooks">
            <AddBooks></AddBooks>
          </Route>
          <PrivateRoute path = "/books/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          {/* exact is needed to specify the home page route */}
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>  
    </div>
    </UserContext.Provider>
  );
}

export default App;
