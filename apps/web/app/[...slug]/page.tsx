import { productSearchService, contentService } from "@/utils/services"
import ContentItem from "@/components/content/ContentItem"

export default async function Page({params}: {params: {slug: string}}) {

  const content = await contentService.getContent(params.slug)

  return (
      <>
        { content.map(item => (
          <ContentItem key={item._meta.schema} content={item} /> 
        )) }
      </>
  )
}
