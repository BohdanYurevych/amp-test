export type CMSMetaType  = {
    schema: string
    [key: string] : any
}

export type ContentItemWithMeta = {
    _meta: CMSMetaType
}

export type ContentItemType = {
    [key: string] : any
} & ContentItemWithMeta