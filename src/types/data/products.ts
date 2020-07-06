export type ProductResponse = {
    id: number,
    name: string,
    description: string,
    image: string,
    imageDescription: string,
    price?: number
    stock?: number
    variants?: ProductVariant[],
    selectedVariant?: ProductVariant
};

export type StandardProduct = {
    id: number,
    name: string,
    description: string,
    image: string,
    imageDescription: string,
    price: number
    stock: number
}

export type ProductWithVariants = StandardProduct & {
    variants: ProductVariant[],
    selectedVariant?: ProductVariant
}

export type ProductVariant = {
    id: number
    name: string
    price: number
    stock: number
};