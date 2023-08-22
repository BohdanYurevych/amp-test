"use client"
import React from 'react'
import useSWR from 'swr'

import { productSearchService } from "@/utils/services/productSearchService/productSearchService.service"
import ProductGrid from "@/components/product/ProductGrid";
import { ContentItemType }   from '@/utils/models'
import { ProductInfo } from '@/utils/models'

export interface Props extends ContentItemType {
    _meta: { schema: "https://github.com/BohdanYurevych/amp-test/brand-products"}
    brandId: string
}

const BrandProductsGrid: React.FC<Props> = ({ brandId }) => {
    
    const { data, isLoading } =  useSWR(brandId, productSearchService.getProductsByBrand)

    if (isLoading) {
        return null;
    }

    return (
        <ProductGrid products={data}/>
    )
}

export default BrandProductsGrid