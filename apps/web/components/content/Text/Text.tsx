import React from 'react'

import Typography from "@mui/material/Typography";
import { ContentItemType }   from '@/utils/models'

export interface Props extends ContentItemType {
    _meta: { schema: "text"}
    text: string
}

const Text: React.FC<Props> = ({text}) => {
    return (
        <>
            <Typography>{text}</Typography>
        </>
    )
}

export default Text