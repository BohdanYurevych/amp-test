import React from 'react'

import { ContentItemType }   from '@/utils/models'
import { ContentItemGridProps } from '@/components/content/ContentItemGrid'
import ContentItemGrid from '@/components/content/ContentItemGrid'


export interface Props extends ContentItemType {
    _meta: { schema: "https://github.com/BohdanYurevych/amp-test/brand-listing"}
    brands: ContentItemType[]
}


const brandsToTileGridProps = (brands: ContentItemType[]): ContentItemGridProps => {
    return {
        _meta: { schema: "https://github.com/BohdanYurevych/amp-test/content-grid"},
        items: brands
    }
}

const BrandListing: React.FC<Props> = ({brands}) => {
    const gridProps = brandsToTileGridProps(brands)
    return (
        <ContentItemGrid {...gridProps} />
    )
}

export default BrandListing