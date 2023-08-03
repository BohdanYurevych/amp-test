import { productSearchService } from "@/utils/services"
import ProductGrid from "@/components/product/ProductGrid";

export default async function Page({params}: {params: {slug: string}}) {

  const products = await productSearchService.getProductsByCategory(params.slug)

  return (
      <ProductGrid products={products}/>
  )
}
