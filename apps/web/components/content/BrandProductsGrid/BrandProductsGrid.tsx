import React from 'react'

import { productSearchService } from "@/utils/services"
import ProductGrid from "@/components/product/ProductGrid";
import { BrandProductsGridProps } from './BrandProductsGrid.type'

const BrandProductsGrid: React.FC<BrandProductsGridProps> = async props => {

    const products = await productSearchService.getProductsByBrand(props.brandId)

    return (
        <ProductGrid products={products}/>
    )
}

export default BrandProductsGrid