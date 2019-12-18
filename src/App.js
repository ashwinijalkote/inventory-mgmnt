import React from 'react';
import './App.css';
import Login from './pages/login';
import {Route, BrowserRouter as Router} from "react-router-dom";
import InventoryManagement from "./pages/inventory-mgmnt";
import 'bootstrap/dist/css/bootstrap.css';
import AddInventory from "./pages/add-inventory";

function App() {
  return (
    <div className="App">
       <Router>
           <Route exact path='/' component={Login}/>
           <Route path='/login' component={Login}/>
           <Route path='/inventory-mgmnt' component={InventoryManagement}/>
           <Route path='/add-inventory' component={AddInventory}/>
       </Router>
    </div>
  );
}

export default App;
