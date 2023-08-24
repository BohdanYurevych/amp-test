import { faker } from '@faker-js/faker'
import { Brand } from '@/utils/models'

export const generateRandomBrand = (id, name?): Brand  => {

    return {
        id: id,
        label: faker.company.name()
    }
}

export const generateRandomBrands = (count): Brand[]  => {
    return Array(count)
            .fill(null)
            .map(() => generateRandomBrand(faker.string.numeric({length: { max: 6, min: 6 }})));
}

