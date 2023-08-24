'use client'
import React from 'react'
import { useState, useEffect } from 'react'

export interface Props {
    children: React.ReactNode
}

const ClientOnly: React.FC<Props> = ({ children }) => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    
    return (
       <> {isClient ? children : null} </>
    )
}

export default ClientOnly