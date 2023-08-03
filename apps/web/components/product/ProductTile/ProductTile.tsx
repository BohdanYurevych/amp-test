import React from 'react'

import Paper from "@mui/material/Paper";
import Rating from '@mui/material/Rating';
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image"
import Link from 'next/link'

import { ProductTileProps } from './ProductTile.type'

const ProductTile: React.FC<ProductTileProps> = props => {
    return (
        <Link href={`/product/${props.id}`}>
            <Paper elevation={4} >
                <Stack sx={{padding: 1}} direction="column" spacing={2}>
                    <Image unoptimized  
                        width={100} 
                        height={50} 
                        style={{ width: '100%', height: 'auto'}} 
                        alt="alt" src={props.image} />
                    <Typography sx={{fontSize: 'h5.fontSize'}}>{props.name}</Typography>
                    <Rating name="read-only" value={props.rating} readOnly />
                    <Typography sx={{fontSize: 'h6.fontSize'}}>{props.price}</Typography>
                    <Typography sx={{fontSize: 'p.fontSize'}}>In store: {props.available}</Typography>
                </Stack>
            </Paper>
        </Link>
    )
}

export default ProductTile