import {Gallery} from "@/app/components/gallery"
import { GalleryThreeVers } from "@/app/components/gallery3ver"

export default function PageWedding () {
    return(
        <>
        <GalleryThreeVers apiUrl="/api/galleryWedding"/>
        </>
    )
}