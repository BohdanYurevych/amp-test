import React from 'react'

import { Mapping } from './componentMapping'
import { ContentItemType}  from '@/utils/models'

export interface Props {
    content: ContentItemType
}

const ContentItem: React.FC<Props> = ({ content }) => {

    const Component = Mapping[content._meta.schema]
    const itemContent = Component ? <Component {... content}/> : <><div>{content._meta.schema} is not supported</div></>

    return (
        <>
            {itemContent}
        </>
    )
}

export default ContentItem