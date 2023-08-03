import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import CategoryTile from '@/components/category/CategoryTile';

import { CategoryGridProps } from './CategoryGrid.type'

const CategoryGrid: React.FC<CategoryGridProps> = props => {
    return (
        <>
            <Grid container spacing={2}>
                { props.categories.map(cat => (
                        <Grid key={cat.id} xs={12} md={6}>
                        <CategoryTile {...cat} />
                    </Grid>
                )) }
            </Grid>
        </>
    )
}

export default CategoryGrid