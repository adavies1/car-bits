import React, { FunctionComponent } from 'react';
import css from './ProductTile.module.scss';

import { ProductResponse, StandardProduct, ProductWithVariants } from '../../types/data/products';
import { money } from '../../utils';

type ProductTileProps = ProductResponse & {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const productTile:FunctionComponent<ProductTileProps> = props => (
    <li data-id={props.id} className={css.tile}>
        <img className={css.image} src={props.image} alt={props.imageDescription} />
        <div className={css.textContainer}>
            <div className={css.textTop}>
                <header className={css.title}>{props.name}</header>
                <p className={css.description}>{props.description}</p>
            </div>
            <div className={css.textBottom}>
                {props.variants ? variantPricing(props as ProductWithVariants) : standardPricing(props as StandardProduct)}
                {props.onClick && <button className="cta" onClick={props.onClick}>Add to basket</button>}
            </div>
        </div>
    </li>
);

const standardPricing = (props: StandardProduct) => (
    <div className={css.leftRight}>
        <strong className={css.price}>£{props.price}</strong>
        <span className={`${css.stock} ${props.stock > 0 ? css.available : css.outOfStock}`}>
            {props.stock > 0 ? 'In stock' : 'Available in 2-3 days'}
        </span>
    </div>
);

const variantPricing = (props: ProductWithVariants) => {
    const minPrice = money(Math.min(...props.variants.map(v => v.price)));
    const maxPrice = money(Math.max(...props.variants.map(v => v.price)));

    return (
        <>
            {/*<strong className={css.price}>
                {minPrice === maxPrice ? `£${minPrice}` : `£${minPrice} - ${maxPrice}`}
    </strong>*/}
            <select className={css.variants}>
                {props.variants.map(variant => (
                    <option value={variant.id}>
                        {`${variant.name} (£${variant.price})`}
                    </option>
                ))}
            </select>
        </>
    )
};

export default productTile;