import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Basket from './containers/Basket/Basket';
import Checkout from './containers/Checkout/Checkout';
import Header from './components/Header/Header';
import Products from './containers/Products/Products';

type AppProps = {

};

type AppState = {

}

class App extends Component<AppProps, AppState> {
    render() {
        return (
            <BrowserRouter basename="car-bits">
                <Header title="CarBits.co.uk" subtitle="Helping keep sheds and bangers on the road since 1994"/>
                <main className="container">
                    <Route path="/" exact component={Products}/>
                    <Route path="/basket" exact component={Basket}/>
                    <Route path="/checkout" exact component={Checkout}/>
                </main>
            </BrowserRouter>
        );
    };
}

export default App;
