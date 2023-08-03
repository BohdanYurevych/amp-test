import { faker } from '@faker-js/faker'
import { CatgoryInfo } from '@/utils/models'

export const generateRandomCategory = (id, name?): CatgoryInfo  => {
    const catName = name ? name : faker.commerce.department()

    return {
        id: id,
        image: faker.image.urlLoremFlickr({ height: 300, width: 500, category: catName  }),
        name: catName,
        shortDescription: faker.lorem.sentences(2),
    }
}

export const generateRandomCategories = (count): CatgoryInfo[]  => {
    return Array(count)
            .fill(null)
            .map(() => generateRandomCategory(faker.string.numeric({length: { max: 6, min: 6 }})));
}

