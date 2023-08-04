import { faker } from '@faker-js/faker'
import { TextProps } from '@/components/content/Text'
import { ContentItemType } from '@/utils/models'
import { BrandProductsGridProps } from '@/components/content/BrandProductsGrid'
import { BannerProps } from '@/components/content/Banner'
import { TileProps } from '@/components/content/Tile'
import { TileGridProps } from '@/components/content/TileGrid'


const contentGenrators: {[key: string]: () => ContentItemType } = {
    "tile-grid" : () => generateTileGridContent(6),
    "banner" : () => generateBannerContent(),
}


export const generateTileContent = (tileTitle?, tileLink?): ContentItemType  => {
    const cat = tileTitle ? tileTitle : faker.commerce.department()

    return {
        _meta: {schema: "tile"},
        title: cat,
        subtitle: faker.lorem.sentences(3),
        link: tileLink ? tileLink : `/category/${cat}`,
        image: {
            alt: faker.lorem.sentences(1),
            url: faker.image.urlLoremFlickr({ height: 200, width: 500, category: cat}),
        } 
    } as TileProps
}

export const generateBannerContent = (): ContentItemType  => {

    return {
        _meta: {schema: "banner"},
        title: faker.lorem.sentences(1),
        subtitle: faker.lorem.sentences(3),
        color: faker.color.rgb(),
        imageAlign: faker.helpers.arrayElement(["left", "right"]),
        button : {
            text : "See More",
            link: "/category/all"
        },
        image: {
            alt: faker.lorem.sentences(1),
            url: faker.image.urlLoremFlickr({ height: 200, width: 500}),
        } 
    } as BannerProps
}


export const generateTextContent = (): ContentItemType  => {

    return {
        _meta: {schema: "text"},
        text: faker.lorem.sentences(2)
    }
}


export const generateTilesAndBanners = (count): ContentItemType[]  => {
    
    return generateMultiple(count, () => contentGenrators[faker.helpers.arrayElement(["tile-grid", "banner"])]())
}


export const generateBrandContentItems = (count?): ContentItemType[]  => {
    const brand: BrandProductsGridProps = {
        _meta: { schema: "brand-products"},
        brandId: "12324"
    }
    return generateTilesAndBanners(count ? count : faker.number.int(6))
            .concat(brand)            
}

type BrandGen = {name :string, link: string}

export const generateBrandLanding = (brands: BrandGen[]): ContentItemType[]  => {
    return [{
        _meta: {schema: "tile-grid"},
        items: brands.map(item => generateTileContent(item.name, item.link))
        
    }] as TileGridProps[]
}

export const generateTileGridContent = (count): ContentItemType  => {
    return {
        _meta: {schema: "tile-grid"},
        items: generateTiles(count)
        
    } as TileGridProps
}

export const generateTiles = (count): ContentItemType[]  => {
    return generateMultiple(count, generateTileContent)
}


export const generateBanners = (count): ContentItemType[]  => {
    return generateMultiple(count, generateBannerContent)
}

const generateMultiple = (count, generator): ContentItemType[] => {
    return Array(count)
            .fill(null)
            .map(() => generator())
}
