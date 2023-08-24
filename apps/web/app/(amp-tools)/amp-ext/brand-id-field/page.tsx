import BrandIdField from "@/components/amp-extensions/BrandIdField"
import ClientOnly from "@/components/util/ClientOnly"
import { brandService } from "@/utils/services"

export default async function Page({params}: {params: {id: string[]}}) {

  const brands = await brandService.getAll()
  
  return (
    <ClientOnly>
      <BrandIdField availableBrands={brands}/>
    </ClientOnly>
  )
}
