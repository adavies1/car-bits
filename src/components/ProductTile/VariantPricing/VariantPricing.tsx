import React, { FunctionComponent } from 'react';
import css from './VariantPricing.module.scss';

import { StandardProduct, ProductWithVariants, ProductVariant } from '../../../types/data/products';
import { money } from '../../../utils';

type VariantPricingProps = {
    product: ProductWithVariants,
    variant: ProductVariant,
    onAddToBasket?: (product: StandardProduct | ProductWithVariants) => void
}

const variantPricing:FunctionComponent<VariantPricingProps> = props => (
    <>
        <div className={css.leftRight}>
            <strong className={css.price}>£{money(props.variant.price)}</strong>
            <span className={`${css.stock} ${props.variant.stock > 0 ? css.available : css.outOfStock}`}>
                {props.variant.stock > 0 ? 'In stock' : 'Available in 2-3 days'}
            </span>
        </div>
        {props.onAddToBasket && (
            <button className="cta" onClick={() => props.onAddToBasket && props.onAddToBasket(props.product)}>
                Add to basket
            </button>
        )}
    </>
);

export default variantPricing;