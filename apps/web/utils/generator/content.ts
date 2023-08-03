import { faker } from '@faker-js/faker'
import { TextProps } from '@/components/content/Text'
import { ContentItemType } from '@/utils/models'
import { BrandProductsGridProps } from '@/components/content/BrandProductsGrid'



export const generateTextContent = (): ContentItemType  => {

    return {
        _meta: {schema: "text"},
        text: faker.lorem.sentences(2)
    }
}

export const generateTextContentItems = (count): ContentItemType[]  => {
    return Array(count)
            .fill(null)
            .map(() => generateTextContent())
}


export const generateBrandContentItems = (count): ContentItemType[]  => {
    const brand: BrandProductsGridProps = {
        _meta: { schema: "brand-products"},
        brandId: "12324"
    }
    return Array<ContentItemType>(count)
            .fill(null)
            .map(() => generateTextContent())
            .concat(brand)
            
}

