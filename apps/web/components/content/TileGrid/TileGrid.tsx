import React from 'react'

import { ContentItemType }   from '@/utils/models'
import Grid from '@mui/material/Unstable_Grid2';
import { TileProps } from '@/components/content/Tile'
import Tile from '@/components/content/Tile'

export interface Props extends ContentItemType {
    _meta: { schema: "https://github.com/BohdanYurevych/amp-test/tile-grid"}
    items: TileProps[]
}

const TileGrid: React.FC<Props> = ({items}) => {

    return (
        <Grid container spacing={2}>
            { items.map((item, index) => (
                <Grid key={index} xs={12} md={2}>
                    <Tile {...item} />
                </Grid>
            )) }
        </Grid>
    )
}

export default TileGrid