import { getMediaData } from "./actionGetMedia";
import Gallery from "@/app/components/gallery";

export default async function GalleryAction() {

    const data = await getMediaData(); // Caricamento dati lato server
    return <Gallery data={data} />; // Passaggio dei dati al client
    
}