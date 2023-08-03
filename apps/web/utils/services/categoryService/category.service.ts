
import 'server-only'
import { generateRandomCategories, generateRandomCategory } from '@/utils/generator'
import { CatgoryInfo } from '@/utils/models'


class CategoryService {

   
    public getCategory(id: string): Promise<CatgoryInfo> {
        return new Promise<CatgoryInfo>((resolve, reject) => {
            resolve(generateRandomCategory(id))
        })
    }

    public getAll(): Promise<CatgoryInfo[]> {
        return new Promise<CatgoryInfo[]>((resolve, reject) => {
            resolve(generateRandomCategories(10))
        })
    }

}

export const categoryService = new CategoryService()