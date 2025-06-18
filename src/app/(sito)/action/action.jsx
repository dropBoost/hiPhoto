'use server'

import { getMediaData } from "../gestionale/(applicativi)/gestione-foto/action/action";
import Gallery from "@/app/components/gallery";

export default async function Gallery() {
    const data = await getMediaData(); // Caricamento dati lato server
    console.log("Dati ricevuti dal server:", data);
    return <Gallery data={data} />;
}