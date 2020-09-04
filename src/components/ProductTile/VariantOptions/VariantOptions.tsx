import React, { FunctionComponent } from 'react';
import css from './VariantOptions.module.scss';

import { ProductWithVariants, ProductVariant } from '../../../types/data/products';
import { money } from '../../../utils';

type VariantOptionsProps = {
    product: ProductWithVariants,
    selectedVariant?: ProductVariant,
    onVariantSelected: (product: ProductWithVariants, variant: ProductVariant) => void
}

const variantOptions:FunctionComponent<VariantOptionsProps> = props => (
    <>
        <select className={css.variants} onChange={e => props.onVariantSelected(props.product, findVariant(props.product, e.target.value))}>
            <option disabled={true} selected={!props.selectedVariant} value=''>
                Please select an option
            </option>
            {props.product.variants.map(variant => (
                <option value={variant.id}>
                    {`${variant.name} (£${money(variant.price)})`}
                </option>
            ))}
        </select>
    </>
);

const findVariant = (product: ProductWithVariants, idToFind: string): ProductVariant => {
    return product.variants.find(v => v.id.toString() === idToFind) as ProductVariant
}

export default variantOptions;
