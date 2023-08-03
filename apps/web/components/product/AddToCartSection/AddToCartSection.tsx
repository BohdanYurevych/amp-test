'use client'

import React, { useState } from 'react'
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InputBase from '@mui/material/InputBase';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { AddToCartSectionProps } from './AddToCartSection.type'

const AddToCartSection: React.FC<AddToCartSectionProps> = props => {

    const [quantityInput, setQuantityInput] = useState(1)

    const onQuantityChange = (val: React.ChangeEvent<HTMLInputElement>): void => {
        const rawValue = Number(val.target.value)
        let value = isNaN(rawValue) ? quantityInput : rawValue;

        if (value > props.maxQuantity) {
            value = props.maxQuantity
        }

        if (value < 1) {
            value = 1
        }

        val.target.value = String(value)

        setQuantityInput(value)
    }

    const incrementQuantity = (): void => {
        if (quantityInput < props.maxQuantity) {
            setQuantityInput(quantityInput + 1)
        }
    }

    const decrementQuantity = (): void => {
        if (quantityInput > 1) {
            setQuantityInput(quantityInput - 1)
        }
    }

    return (
        <Stack direction="row" justifyContent="center" spacing={3}>
            <Stack direction="row" spacing={0}>
                <Paper elevation={3} >
                <IconButton onClick={incrementQuantity}>
                    <AddIcon fontSize='large'/>
                </IconButton>
                <InputBase sx={{width: 40, textAlign: 'center'}} 
                            onChange={onQuantityChange} 
                            value={quantityInput}/>
                <IconButton  onClick={decrementQuantity}>
                    <RemoveIcon fontSize='large'/>
                </IconButton>
                </Paper>
            </Stack>
            <Button variant="contained" size='large' color="success">
                <Typography sx={{fontSize: 'h5.fontSize'}}>{props.buttonText}</Typography>
            </Button>
        </Stack>
    )
}

export default AddToCartSection