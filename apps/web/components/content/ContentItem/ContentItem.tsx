import React from 'react'

import { Mapping } from './componentMapping'
import { ContentItemProps } from './ContentItem.type'

const ContentItem: React.FC<ContentItemProps> = ({ content }) => {

    const Component = Mapping[content._meta.schema]
    const itemContent = Component ? <Component {... content}/> : <><div>{content._meta.schema} is not supported</div></>

    return (
        <>
            {itemContent}
        </>
    )
}

export default ContentItem