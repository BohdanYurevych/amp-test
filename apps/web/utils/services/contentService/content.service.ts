
import 'server-only'
import { ContentItemType } from '@/utils/models'
import { generateBrandContentItems, generateBrandLanding } from '@/utils/generator'

const fackeContentMap: { [key: string]: (string) => ContentItemType[] } = {
    "brand/asdasd" : () => generateBrandContentItems(),
    "brand/nike" : () => generateBrandContentItems(),
    "brand/cat" : () => generateBrandContentItems(),
    "brand/lego" : () => generateBrandContentItems(),
    "brand/thule" : () => generateBrandContentItems(),
    "brand/unbranded" : () => generateBrandContentItems(),
    "brand/all" : () => generateBrandLanding([
        { name : "Toyota", link: "/brand/asdasd" },
        { name : "Nike", link: "/brand/nike" },
        { name : "Cat", link: "/brand/cat" },
        { name : "Lego", link: "/brand/lego" },
        { name : "Thule", link: "/brand/thule" },
        { name : "All", link: "/brand/unbranded" },
    ]),
}

class ContentService {

   

    public getContent(id: string): Promise<ContentItemType[]> {
        return new Promise<ContentItemType[]>((resolve, reject) => {
            const generator = fackeContentMap[id]
            if (generator) {
                resolve(generator(id))
            } else {
                reject("not found")
            }
            
        })
    }
    

}

export const contentService = new ContentService()