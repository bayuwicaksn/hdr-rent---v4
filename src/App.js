import React from 'react';
import './App.css';
import Sidebar from './Parts/Sidebar/Sidebar2'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Overview'
import Products from './Pages/Products';
import Order from './Pages/Order'
import TambahProduk from './Pages/TambahProduk';
import Customer from './Pages/Customer';
import Settings from './Pages/Settings';



function App() {
  return (
    <Router>
    <div className="flex flex-row h-screen">
      <Sidebar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/order' component={Order}/>
        <Route path='/tambah-produk' component={TambahProduk}/>
        <Route path='/customer' component={Customer}/>
        <Route path='/settings' component={Settings}/>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
