import React, { FunctionComponent } from 'react';
import css from './ProductTile.module.scss';

import StandardPricing from './StandardPricing/StandardPricing';
import VariantOptions from './VariantOptions/VariantOptions';
import VariantPricing from './VariantPricing/VariantPricing';

import { ProductResponse, StandardProduct, ProductWithVariants, ProductVariant } from '../../types/data/products';

type ProductTileProps = {
    product: ProductResponse,
    onAddToBasket: (product: StandardProduct | ProductWithVariants) => void,
    onVariantSelected: (product: ProductWithVariants, variant: ProductVariant) => void,
    selectedVariant?: ProductVariant
}

const productTile:FunctionComponent<ProductTileProps> = props => (
    <li data-id={props.product.id} className={css.tile}>
        <img className={css.image} src={`${process.env.PUBLIC_URL}/${props.product.image}`} alt={props.product.imageDescription} />
        <div className={css.textContainer}>
            <div className={css.textTop}>
                <header className={css.title}>{props.product.name}</header>
                <p className={css.description}>{props.product.description}</p>
            </div>
            <div className={css.textBottom}>
                {props.product.variants &&
                    <VariantOptions
                        product={props.product as ProductWithVariants}
                        onVariantSelected={props.onVariantSelected}
                        selectedVariant={props.selectedVariant}/>
                }
                {props.product.variants && props.selectedVariant &&
                    <VariantPricing product={props.product as ProductWithVariants} variant={props.selectedVariant} onAddToBasket={props.onAddToBasket}/>
                }
                {!props.product.variants &&
                    <StandardPricing product={props.product as StandardProduct} onAddToBasket={props.onAddToBasket}/>
                }
            </div>
        </div>
    </li>
);


export default productTile;