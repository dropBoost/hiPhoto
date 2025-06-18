'use client'

import { useState, useEffect } from "react";
import CaricamentoFoto from "./componenti/caricamentoFoto"
import GalleryMedia from "./componenti/galleryMedia"

export default function GestioneFoto () {

   const [refreshGallery, setRefreshGallery] = useState(false);

  const handleRefresh = () => {
    setRefreshGallery((prev) => !prev);
  };

    return (
        <>
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full p-5 gap-4 justify-center items-center">
          <div className="lg:col-span-9 col-span-12 col-start-1 lg:row-span-1 row-span-3 row-start-1 h-full border border-1 border-rose-600 rounded-2xl flex p-5 items-center justify-start ">
            <button
              onClick={handleRefresh}
              className="bg-red-700 text-white text-sm px-4 py-2 rounded"
            >
              Ricarica gallery
            </button>
          </div>
          <div className="lg:col-span-9 col-span-12 col-start-1 lg:row-span-11 row-span-3 row-start-2 h-full border border-1 border-rose-600 rounded-2xl p-5 flex items-center justify-center">
            <div className="flex items-start justify-start h-[70vh] overflow-auto">
            <GalleryMedia refreshTrigger={refreshGallery} />
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 lg:col-start-10 col-start-1 lg:row-span-12 lg:row-start-1 row-span-9 row-start-4 h-full bg-neutral-800 rounded-2xl flex items-start justify-center p-5">
            <CaricamentoFoto/>
          </div>
        </div>
        </>
    )
}