import { categoryService } from "@/utils/services"
import CategoryGrid from "@/components/category/CategoryGrid";

export default async function Page({params}: {params: {slug: string}}) {

  const categories = await categoryService.getAll()

  return (
      <CategoryGrid categories={categories}/>
  )
}
