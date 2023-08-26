import React from 'react'

import Container from "@/components/content/Container"

import { ContentItemType }   from '@/utils/models'

export interface Props extends ContentItemType {
    _meta: { schema: "https://github.com/BohdanYurevych/amp-test/brand-content"}
    items: ContentItemType[]
}



const BrandContent: React.FC<Props> = ({items}) => {
    return (
        <Container _meta={{schema: "https://github.com/BohdanYurevych/amp-test/container"}} items={items} />
    )
}

export default BrandContent