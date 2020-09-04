import React, { FunctionComponent } from 'react';
import css from './StandardPricing.module.scss';

import { StandardProduct, ProductWithVariants } from '../../../types/data/products';
import { money } from '../../../utils';

type StandardPricingProps = {
    product: StandardProduct,
    onAddToBasket?: (product: StandardProduct | ProductWithVariants) => void
}

const standardPricing:FunctionComponent<StandardPricingProps> = props => (
    <>
        <div className={css.leftRight}>
            <strong className={css.price}>£{money(props.product.price)}</strong>
            <span className={`${css.stock} ${props.product.stock > 0 ? css.available : css.outOfStock}`}>
                {props.product.stock > 0 ? 'In stock' : 'Available in 2-3 days'}
            </span>
        </div>
        {props.onAddToBasket && (
            <button className="cta" onClick={() => props.onAddToBasket && props.onAddToBasket(props.product)}>
                Add to basket
            </button>
        )}
    </>
);

export default standardPricing;