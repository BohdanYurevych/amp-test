
import 'server-only'
import { ContentItemType } from '@/utils/models'
import { generateBrandContentItems } from '@/utils/generator'


class ContentService {

   

    public getContent(id: string): Promise<ContentItemType[]> {
        return new Promise<ContentItemType[]>((resolve, reject) => {
            resolve(generateBrandContentItems(10))
        })
    }
    

}

export const contentService = new ContentService()