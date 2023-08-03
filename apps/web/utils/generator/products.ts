import { faker } from '@faker-js/faker'
import { ProductInfo } from '@/utils/models'

export const generateRandomProduct = (id, name?, adj?): ProductInfo  => {
    const productAdj = adj ? adj : faker.commerce.productAdjective()
    const productName = name ? name : faker.commerce.product()

    return {
        id: id,
        price: faker.commerce.price({ symbol: '$' }),
        image: faker.image.urlLoremFlickr({ height: 300, width: 500, category: productName  }),
        name: `${productAdj} ${productName}`,
        shortDescription: faker.commerce.productDescription(),
        rating: faker.number.int(5),
        available: faker.number.int({ min: 1, max: 300 })
    }
}

export const generateRandomProducts = (count): ProductInfo[]  => {
    return Array(count)
            .fill(null)
            .map(() => generateRandomProduct(faker.string.numeric({length: { max: 6, min: 6 }})));
}

export const generateRandomSimilarProducts = (count, prodName?): ProductInfo[]  => {
    const id = faker.string.numeric({length: { max: 6, min: 6 }})
    const name = prodName ? prodName : faker.commerce.product()
    return Array(count)
            .fill(null)
            .map(() => generateRandomProduct(id, name));
}

