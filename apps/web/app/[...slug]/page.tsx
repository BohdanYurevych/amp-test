import { contentService } from "@/utils/services"
import { Stack } from '@mui/material';
import ContentItem from "@/components/content/ContentItem"

export default async function Page({params}: {params: {slug: string[]}}) {

  const content = await contentService.getPageContent(params.slug.join("/"))
  
  return (
    <Stack spacing={2}>
      { content.map(item => (
        <ContentItem key={item._meta.schema} content={item} /> 
      )) }
    </Stack>
  )
}
