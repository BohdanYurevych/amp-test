import React from 'react'

import { productSearchService } from "@/utils/services"
import ProductGrid from "@/components/product/ProductGrid";
import { ContentItemType }   from '@/utils/models'

export interface Props extends ContentItemType {
    _meta: { schema: "https://github.com/BohdanYurevych/amp-test/brand-products"}
    brandId: string
}

const BrandProductsGrid: React.FC<Props> = async ({ brandId }) => {

    const products = await productSearchService.getProductsByBrand(brandId)

    return (
        <ProductGrid products={products}/>
    )
}

export default BrandProductsGrid