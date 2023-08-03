import Image from "next/image"
import Grid from '@mui/material/Unstable_Grid2';
import Typography from "@mui/material/Typography";
import ProductInfo from "@/components/product/ProductInfo"
import { productDetailsService } from "@/utils/services"

const imgHeight = 300;
const imgWidht = 500;


export default async function Page({params}: {params: {slug: string}}) {

  const product = await productDetailsService.getProductDetails(params.slug)

  return (
      <Grid container spacing={2}>
        <Grid xs={12} md={7}>
        
          <Typography sx={{fontSize: 'h3.fontSize'}} variant="h1">{product.name}</Typography>
        </Grid>
        <Grid xs={12} md={7}>
          <Image unoptimized  
                  width={imgWidht} 
                  height={imgHeight} 
                  style={{ width: '100%', height: 'auto'}} 
                  alt="alt" src={product.image} />
        </Grid>
        <Grid xs={12} md={5}>
          <ProductInfo stars={product.rating} 
                      shortDescription={product.shortDescription} 
                      price={product.price} 
                      available={product.available} />
        </Grid> 
        
      </Grid>
  );
}
