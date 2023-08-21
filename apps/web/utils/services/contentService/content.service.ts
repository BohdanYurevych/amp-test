
import 'server-only'
import { ContentItemType } from '@/utils/models'
class ContentService {


    public async getPageContent(id: string): Promise<ContentItemType[]> {
        const res = await fetch(`${process.env.AMP_HUB_URL}/content/key/${id}?depth=all&format=inlined`)
        const data = res.ok ? await res.json() : null

        return new Promise<ContentItemType[]>((resolve, reject) => {
            if (!res.ok) {
                reject("not found")
            } else {
                resolve(data.content.content.items as ContentItemType[])
            } 
        })
    }
    

}

export const contentService = new ContentService()