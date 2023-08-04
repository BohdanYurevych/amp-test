import React from 'react'

import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image"
import Link from 'next/link'

export interface Props {
    id: string
    image: string
    name: string
    shortDescription: string
}

const CategoryTile: React.FC<Props> = props => {
    return (
        <Link style={{textDecoration: "auto"}} href={`/category/${props.id}`}>
            <Paper elevation={4} >
                <Stack direction="row" spacing={2}>
                    <Image unoptimized  
                                width={100} 
                                height={50} 
                                style={{ width: '30%', height: 'auto'}} 
                                alt="alt" src={props.image} />
                    <Stack sx={{padding: 1}} direction="column" spacing={2}>
                        
                        <Typography sx={{fontSize: 'h5.fontSize'}}>{props.name}</Typography>
                        <Typography sx={{fontSize: 'p.fontSize'}}>{props.shortDescription}</Typography>
                    </Stack>
                </Stack>
                
            </Paper>
        </Link>
    )
}

export default CategoryTile