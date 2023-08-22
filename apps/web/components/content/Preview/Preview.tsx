'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { init } from 'dc-visualization-sdk';
import { ContentItemType }   from '@/utils/models'
import { Stack } from '@mui/material';
import ContentItem from "@/components/content/ContentItem"



const  Preview: React.FC = () => {
    const [content, setContent] = useState<ContentItemType>()

    useEffect(() => {
        const subscirbeContentChange = async () => {
            const sdk = await init();
            
            const unsubscribe = sdk.form.changed<{content: ContentItemType}>((model) => {
                setContent(model.content)
            }, {
                format: 'inlined',
                depth: 'all'
            });
            

            const initialContent = await sdk.form.get<{content: ContentItemType}>({
                format: 'inlined',
                depth: 'all'
            })
            setContent(initialContent.content)
        }
        
        subscirbeContentChange()

    },[setContent])

    const pageContent = content?._meta.schema == "https://github.com/BohdanYurevych/amp-test/page" ? content.content : content

    const item = pageContent ? <ContentItem key={pageContent._meta.schema} content={pageContent} /> : <>no preview available</>

    return (
        <Stack spacing={2}>
            {item}
        </Stack>
    )
}

export default Preview