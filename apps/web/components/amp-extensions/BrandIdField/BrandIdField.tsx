'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { init  } from 'dc-extensions-sdk';
import type { ContentFieldExtension  } from 'dc-extensions-sdk';

interface Option {
    label: string
    id: string
}

type BrandIdFieldExtension = ContentFieldExtension<string>

export interface Props {
    availableBrands: Option[]
}

const findOption = (opts: Option[], id: string): Option | null => {
    return opts.find((val) => val.id == id)
}

const  BrandIdField: React.FC<Props> = ({ availableBrands }) => {
    const [brandId, setBrandId] = useState<Option>(availableBrands[0])
    const [brandIdInputValue, setBrandIdInputValue] = useState<string>('')
    const [sdk, setSDK] =  useState<BrandIdFieldExtension>()
    

    useEffect(() => {
        const initField = async () => {
            const sdk = await init<BrandIdFieldExtension>()
            const initValue = await sdk.field.getValue()
            const selectedOption = findOption(availableBrands, initValue)
            setSDK(sdk)
            setBrandId(selectedOption)
            setBrandIdInputValue(selectedOption.label)
        }
        initField();
    },[ availableBrands ])

    const sendValue = async (val: string) => {
        if (sdk) {
            await sdk.field.setValue(val)
        }
    }

    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={brandId}
                inputValue={brandIdInputValue}
                options={availableBrands}
                sx={{ width: 300 }}
                onChange={(event: any, newValue: Option | null) => {
                    setBrandId(newValue);
                    sendValue(newValue?.id)
                }}
                onInputChange={(event, newInputValue) => {
                    setBrandIdInputValue(newInputValue);
                }}
                renderInput={(params) => <TextField {...params} label="Select brand" />}
            />
        </>
    )
}

export default BrandIdField