import React, { Component } from 'react';
import axios from 'axios';

import ProductTile from '../../components/ProductTile/ProductTile';
import { ProductResponse } from '../../types/data/products';

type ProductsProps = {

}

type ProductsState = {
    loading: boolean,
    error: boolean,
    products: ProductResponse[]
}

class Products extends Component<ProductsProps, ProductsState> {
    state = {
        loading: true,
        error: false,
        products: []
    };

    render() {
        return (
            <>
                <h1>Products page</h1>
                {this.state.loading && <p>Loading products, please wait...</p>}
                {this.state.error && <strong>There was an error loading data.</strong>}
                {(!this.state.loading && !this.state.error) && (
                    <ul className="grid grid--products">
                        {this.state.products.map(product => <ProductTile {...product} onClick={this.onAddToBasket} />)}
                    </ul>
                )}
            </>
        )
    }

    componentDidMount() {
        axios.get<ProductResponse[]>('/api/products.json')
            .then(resp => {
                this.setState({
                    products: resp.data,
                    error: false,
                    loading: false
                })
            })
            .catch(resp => {
                this.setState({
                    products: [],
                    error: true,
                    loading: false
                })
            })
    }

    onAddToBasket(event: React.MouseEvent<HTMLButtonElement>) {

    }
}

export default Products;