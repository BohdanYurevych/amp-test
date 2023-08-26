import BrandProductsGrid from "@/components/content/BrandProductsGrid"
import Container from "@/components/content/Container"
import Banner from "@/components/content/Banner"
import TileGrid from "@/components/content/TileGrid"
import BrandListing from "@/components/content/BrandListing"
import BrandContent from "@/components/content/BrandContent"
import Brand from "@/components/content/Brand"
import ContentItemGrid from "@/components/content/ContentItemGrid"

export const Mapping: any = {
    "https://github.com/BohdanYurevych/amp-test/brand-products" : BrandProductsGrid,
    "https://github.com/BohdanYurevych/amp-test/container"      : Container,
    "https://github.com/BohdanYurevych/amp-test/banner"         : Banner,
    "https://github.com/BohdanYurevych/amp-test/tile-grid"      : TileGrid,
    "https://github.com/BohdanYurevych/amp-test/brand-listing"  : BrandListing,
    "https://github.com/BohdanYurevych/amp-test/brand-content"  : BrandContent,
    "https://github.com/BohdanYurevych/amp-test/content-grid"   : ContentItemGrid,
    "https://github.com/BohdanYurevych/amp-test/brand"          : Brand,
}