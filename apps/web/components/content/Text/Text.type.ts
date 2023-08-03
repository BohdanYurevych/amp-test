import { ContentItemType, ContentItemWithMeta}   from '@/utils/models'

export interface TextProps {
    _meta: { schema: "text"}
    text: string
}