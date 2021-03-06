import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound.js/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Reviews from './components/Reviews/Reviews';


function App() {
  return (
    <div>
    <Header/>
    <Router>
            <Switch>
              <Route path ='/' exact >
                <Shop/>
              </Route>
              <Route path ='/shop' >
                <Shop/>
              </Route>
              <Route path ='/review' >
                <Reviews/>
              </Route>
              <Route path ='/inventory' >
                <Inventory/>
              </Route>
              <Route path = '/product/:productKey' >
                 <ProductDetails/>
              </Route>
              <Route path ='*' >
                <NotFound/>
              </Route>
            </Switch>
    </Router>
    
    </div>
  );
}

export default App;
