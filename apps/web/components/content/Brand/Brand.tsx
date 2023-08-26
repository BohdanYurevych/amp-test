import React from 'react'

import { TileProps } from '@/components/content/Tile'
import Tile from '@/components/content/Tile'
import { ImageLink }   from '@/utils/models'
import { ContentItemType }   from '@/utils/models'

export interface Props extends ContentItemType {
    _meta: { schema: "https://github.com/BohdanYurevych/amp-test/brand"}
    image: ImageLink
    name: string
    description: string
    content: {id: string}   
}

const brandToTileProps = (brand: Props): TileProps => {
    return {
        title: brand.name,
        subtitle: brand.description,
        image : {
            alt: brand.name,
            url: brand.image
        },
        link: `/id:${brand.content.id}`
    }
}

const Brand: React.FC<Props> = props => {
    const tileProps = brandToTileProps(props)

    return (
        <Tile {...tileProps} />
    )
}

export default Brand