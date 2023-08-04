import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import ProductTile from '@/components/product/ProductTile';

import { ProductTileProps } from '@/components/product/ProductTile'

export interface Props {
    products: ProductTileProps[]
}

const ProductGrid: React.FC<Props> = ({products}) => {
    return (
        <>
            <Grid container spacing={2}>
                { products.map(product => (
                        <Grid key={product.id} xs={12} md={3}>
                        <ProductTile {...product} />
                    </Grid>
                )) }
            </Grid>
        </>
    )
}

export default ProductGrid