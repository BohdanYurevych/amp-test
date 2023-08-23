import BrandIdField from "@/components/amp-extensions/BrandIdField"

export default async function Page({params}: {params: {id: string[]}}) {
  
  return (
    <> 
      <BrandIdField availableBrands={[{label: "Nike", id: "nike"}, {label: "Brandtest", id: "test"}]}/>
    </>
  )
}
