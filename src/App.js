import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./Parts/TopBar/TopBar";
import Sidebar from "./Parts/Sidebar/Sidebar";
import Home from "./Pages/Overview";
import Products from "./Pages/Product/Products";
import ProductAdd from "./Pages/Product/ProductAdd";
import DetailProduct from "./Pages/Product/ProductDetail";
import Order from "./Pages/Order";
import Customer from "./Pages/Customer";
import Settings from "./Pages/Settings";
import { SidebarProvider } from "./Context/SidebarContext";
import AddCustomer from "./Pages/AddCustomer";

function App() {
  return (
    <SidebarProvider>
      <Router>
        <div className="flex bg-gray-200">
          <Sidebar />
          <div className="w-full text-gray-700 text-sm overflow-x-hidden">
            <TopBar />
            <div className="py-10 px-5 lg:px-10 xl:px-20">
              {/* Place your content here */}
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/order" component={Order} />
                <Route path="/add-product" component={ProductAdd} />
                <Route path="/detail-product" component={DetailProduct} />
                <Route path="/customer" component={Customer} />
                <Route path="/settings" component={Settings} />
                <Route path="/add-customer" component={AddCustomer} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </SidebarProvider>
  );
}

export default App;
