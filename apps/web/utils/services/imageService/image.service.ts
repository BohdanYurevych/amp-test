
import { ImageLink } from '@/utils/models'


class ImageService {

    public getImageUrl(image: ImageLink): string {
        return `https://${image.defaultHost}/i/${image.endpoint}/${image.name}`
    }

}

export const imageService = new ImageService()