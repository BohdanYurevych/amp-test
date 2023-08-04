import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import CategoryTile from '@/components/category/CategoryTile';

import { CategoryTileProps } from '@/components/category/CategoryTile'

export interface Props {
    categories: CategoryTileProps[]
}

const CategoryGrid: React.FC<Props> = ({ categories }) => {
    return (
        <>
            <Grid container spacing={2}>
                { categories.map(cat => (
                        <Grid key={cat.id} xs={12} md={6}>
                        <CategoryTile {...cat} />
                    </Grid>
                )) }
            </Grid>
        </>
    )
}

export default CategoryGrid