
import 'server-only'
import { generateRandomProducts, generateRandomSimilarProducts } from '@/utils/generator'
import { ProductInfo } from '@/utils/models'


class ProductSearchService {
   
    public getProductsByBrand(brand: string): Promise<ProductInfo[]> {
        return new Promise<ProductInfo[]>((resolve, reject) => {
            resolve(generateRandomProducts(24))
        })
    }

    public getProductsByCategory(category: string): Promise<ProductInfo[]> {
        return new Promise<ProductInfo[]>((resolve, reject) => {
            resolve(generateRandomSimilarProducts(24))
        })
    }

}

export const productSearchService = new ProductSearchService()