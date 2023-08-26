
import 'server-only'
import { ContentItemType } from '@/utils/models'
class ContentService {


    public async getPageContent(id: string): Promise<ContentItemType> {
        const pageId = this.getPageId(id)
        const path = pageId ? `id/${pageId}` : `key/${id}`
        console.log(`path ${id}`)
        const res = await fetch(`${process.env.AMP_HUB_URL}/content/${path}?depth=all&format=inlined`)
        const data = res.ok ? await res.json() : null

        return new Promise<ContentItemType>((resolve, reject) => {
            if (!res.ok) {
                reject("not found")
            } else {
                resolve(data.content as ContentItemType)
            } 
        })
    }

    public getPageId(id: string): string {
        return id.startsWith("id%3A") ? id.replace("id%3A", "") : null
    }
    

}

export const contentService = new ContentService()