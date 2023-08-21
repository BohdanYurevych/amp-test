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

export type ImageLink = {
    _meta: {
        schema: "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
    }
    name: string
    endpoint: string
    defaultHost: string
}