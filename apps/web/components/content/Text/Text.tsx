import React from 'react'

import Typography from "@mui/material/Typography";
import { TextProps } from './Text.type'

const Text: React.FC<TextProps> = props => {
    return (
        <>
            <Typography>{props.text}</Typography>
        </>
    )
}

export default Text