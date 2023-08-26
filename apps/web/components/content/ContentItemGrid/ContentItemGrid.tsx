import React from 'react'

import { ContentItemType }   from '@/utils/models'
import Grid from '@mui/material/Unstable_Grid2';
import ContentItem from '@/components/content/ContentItem'

export interface Props extends ContentItemType {
    _meta: { schema: "https://github.com/BohdanYurevych/amp-test/content-grid"}
    items: ContentItemType[]
}

const TileGrid: React.FC<Props> = ({items}) => {

    return (
        <Grid container spacing={2}>
            { items.map((item, index) => (
                <Grid key={index} xs={12} md={2}>
                    <ContentItem content={item} />
                </Grid>
            )) }
        </Grid>
    )
}

export default TileGrid