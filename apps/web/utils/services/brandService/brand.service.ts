
import 'server-only'
import { generateRandomBrands } from '@/utils/generator'
import { Brand } from '@/utils/models'

const defaultBrands: Brand[] = [
    {label: "Nike", id: 'nike1234'}
]

class BrandService {


    public getAll(): Promise<Brand[]> {
        return new Promise<Brand[]>((resolve, reject) => {
            resolve(defaultBrands.concat(generateRandomBrands(10)))
        })
    }

}

export const brandService = new BrandService()