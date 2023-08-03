
import 'server-only'
import { generateTextContent, generateTextContentItems } from '@/utils/generator'
import { ContentItemType } from '@/utils/models'
import { generateBrandContentItems } from '@/utils/generator/content'


class ContentService {

   

    public getContent(id: string): Promise<ContentItemType[]> {
        return new Promise<ContentItemType[]>((resolve, reject) => {
            resolve(generateBrandContentItems(10))
        })
    }
    

}

export const contentService = new ContentService()