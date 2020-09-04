import React, { Component } from 'react';
import axios from 'axios';

import ProductTile from '../../components/ProductTile/ProductTile';
import { ProductResponse, StandardProduct, ProductWithVariants, ProductVariant } from '../../types/data/products';


type ProductsProps = {

}

type ProductsState = {
    loading: boolean,
    error: boolean,
    products: ProductResponse[],
    selectedVariants: {
        id: ProductVariant
    }
}

class Products extends Component<ProductsProps, ProductsState> {
    state = {
        loading: true,
        error: false,
        products: [] as ProductResponse[],
        selectedVariants: {} as { id: ProductVariant }
    };

    render() {
        return (
            <>
                <h1>Products page</h1>
                {this.state.loading && <p>Loading products, please wait...</p>}
                {this.state.error && <strong>There was an error loading data.</strong>}
                {(!this.state.loading && !this.state.error) && (
                    <ul className="grid grid--products">
                        {this.state.products.map(product => <ProductTile product={product} onAddToBasket={this.onAddToBasket} onVariantSelected={this.onVariantSelected} />)}
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
                    products: [] as ProductResponse[],
                    error: true,
                    loading: false
                })
            })
    }

    onAddToBasket = (product: StandardProduct | ProductWithVariants) => {

    }

    onVariantSelected = (product: ProductWithVariants, variant: ProductVariant) => {
        const newProducts = [...this.state.products];
        newProducts.splice(newProducts.indexOf(product), 1, {
            ...product,
            selectedVariant: variant
        });

        this.setState({
            products: newProducts
        });
    }
}

export default Products;