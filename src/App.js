import React from "react";
import "./App.css";
import Sidebar from "./Parts/Sidebar/Sidebar2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Overview";
import Products from "./Pages/Products";
import Order from "./Pages/Order";
import TambahProduk from "./Pages/TambahProduk";
import Customer from "./Pages/Customer";
import Settings from "./Pages/Settings";
import TopBar from "./Parts/TopBar/TopBar";

function App() {
  return (
    <Router>
      <div className="flex bg-gray-200">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <div className="p-10 2xl:px-20">
            {/* Place your content here */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/order" component={Order} />
              <Route path="/tambah-produk" component={TambahProduk} />
              <Route path="/customer" component={Customer} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
