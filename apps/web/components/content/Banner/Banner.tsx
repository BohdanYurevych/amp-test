import React from 'react'

import Typography from "@mui/material/Typography";
import { ContentItemType }   from '@/utils/models'
import { Button, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Box from '@mui/material/Box';
import Image from "next/image"

export interface Props extends ContentItemType {
    _meta: { schema: "banner"}
    title: string
    subtitle: string
    image: {
        alt: string
        url: string
    }
    button: {
        text: string
        link: string
    }
    color: string
    imageAlign?: "left" | "right"
}

const Banner: React.FC<Props> = props => {
    const align = props.imageAlign == "left"  ? "row" : "row-reverse"

    return (
        <>
            <Paper sx={{bgcolor: props.color}}>
                <Grid direction={align} container spacing={2}>
                    <Grid xs={12} md={5}>
                        <Image unoptimized  
                            width={500} 
                            height={300} 
                            style={{ width: '100%', height: 'auto'}} 
                            alt={props.image.alt} src={props.image.url} />
                    </Grid>
                    <Grid  xs={12} md={7}>
                        <Box>
                        <Stack
                            padding={1}
                            direction="column"
                            justifyContent="space-evenly"
                            alignItems="flex-start"
                            spacing={3}>

                                <Typography sx={{fontSize: 'h5.fontSize', fontWeight: "bold"}}>{props.title}</Typography>
                                <Typography sx={{fontSize: 'p.fontSize'}}>{props.subtitle}</Typography>
                                <Button variant="outlined" href={props.button.link}>{props.button.text}</Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                
            </Paper>
        </>
    )
}

export default Banner