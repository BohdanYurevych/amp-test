import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import ProductTile from '@/components/product/ProductTile';

import { ProductGridProps } from './ProductGrid.type'

const ProductGrid: React.FC<ProductGridProps> = props => {
    return (
        <>
            <Grid container spacing={2}>
                { props.products.map(product => (
                        <Grid key={product.id} xs={12} md={3}>
                        <ProductTile {...product} />
                    </Grid>
                )) }
            </Grid>
        </>
    )
}

export default ProductGrid