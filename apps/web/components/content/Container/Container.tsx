import React from 'react'

import ContentItem from "@/components/content/ContentItem"
import { ContentItemType }   from '@/utils/models'

export interface Props extends ContentItemType {
    _meta: { schema: "container"}
    items: ContentItemType[]
}

const Container: React.FC<Props> = ({items}) => {
    return (
        <>
            { items.map(item => (
                <ContentItem key={item._meta.schema} content={item} /> 
        ))  }
        </>
    )
}

export default Container