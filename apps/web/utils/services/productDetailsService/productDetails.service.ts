
import 'server-only'
import { generateRandomProduct } from '@/utils/generator'
import { ProductInfo } from '@/utils/models'


class ProductDetailsService {

   
    public getProductDetails(pcode: string): Promise<ProductInfo> {
        return new Promise<ProductInfo>((resolve, reject) => {
            resolve(generateRandomProduct(pcode))
        })
    }

}

export const productDetailsService = new ProductDetailsService()