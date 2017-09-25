import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import BaseLayout from './components/BaseLayout';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/cart' component={Cart} />
              <Route path='/:category' component={ProductList} />
              <Route path='/:category/:id' component={ProductDetail} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
