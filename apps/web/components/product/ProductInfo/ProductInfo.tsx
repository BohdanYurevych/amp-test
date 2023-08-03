import React from 'react'

import Paper from "@mui/material/Paper";
import Rating from '@mui/material/Rating';
import AddToCartSection from '@/components/product/AddToCartSection'
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

import { ProductInfoProps } from './ProductInfo.type'

const ProductInfo: React.FC<ProductInfoProps> = props => {
    return (
        <Paper elevation={3} >
            <Stack sx={{padding: 2}} direction="column" spacing={2}>
                <Typography sx={{fontSize: 'h4.fontSize'}}>{props.price}</Typography>
                <Rating name="read-only" value={props.stars} readOnly />
                <Typography sx={{fontSize: 'p.fontSize'}}>{props.shortDescription}</Typography>
                <Typography sx={{fontSize: 'p.fontSize'}}>Available in store: {props.available}</Typography>
                <AddToCartSection buttonText="Add To Cart" maxQuantity={props.available} />
            </Stack>
        </Paper>
    )
}

export default ProductInfo