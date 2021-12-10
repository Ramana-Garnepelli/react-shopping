import React from 'react'
import Header from './react shopping cart/Containers/Header'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import ProductDetails from './react shopping cart/Containers/ProductDetails';
import ProductListing from './react shopping cart/Containers/ProductListing';
function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={ProductListing} />
      <Route path="/product/:productId" exact component={ProductDetails} />
      <Route> 404 NOT FOUND!</Route>
     </Switch> 
     </Router>
    </div>
  )
}

export default App
