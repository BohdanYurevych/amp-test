import React from 'react'

import { ContentItemType }   from '@/utils/models'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export interface Props extends ContentItemType {
    _meta: { schema: "tile"}
    title: string
    subtitle: string
    image: {
        alt: string
        url: string
    }
    link: string
}

const Tile: React.FC<Props> = props => {

    return (
        <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea href={props.link}>
                <CardMedia
                component="img"
                height="140"
                image={props.image.url}
                alt={props.image.alt}
                />
                <CardContent>
                    <Typography sx={{fontSize: 'h5.fontSize'}} gutterBottom component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.subtitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Tile