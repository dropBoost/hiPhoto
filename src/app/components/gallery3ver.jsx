'use client'

import React, { useState, useEffect } from "react";
import '../style/gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark  } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const iconaChiusura = <FontAwesomeIcon icon={faXmark} className='text-xs m-1 hover:text-red-700' />

export const GalleryThreeVers = ({ apiUrl }) => {

    const [data, setData] = useState([]);
    const [model, SetModel] = useState(false);
    const [tempimgSrc, SetTempImgSrc] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error('Errore nel fetch:', err);
            }
        };

        fetchData();
    }, [apiUrl]);


    const getImg = (imgUrl) => {
        SetTempImgSrc(imgUrl);
        SetModel(true);
        console.log(imgUrl)
    }

    return (
        <>
        <div className={model ? "model open" : "model"}>
          <Image
              src={tempimgSrc}
              width={1200}
              height={800}
              quality={60}
              className="w-full h-auto rounded-lg object-cover"
            />
            <button onClick={() => SetModel(false)}>{iconaChiusura}</button>
        </div>
            <div class="max-w-6xl mx-auto mt-8">
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4 ps-4 pe-4 pb-5">
                {data.map((item) => (
                <div className="transition-all duration-[350ms] ease-in-out cursor-pointer mb-3" key={item.UUID} onClick={() => getImg(item.imgUrl)}>
                    <Image
                        src={item.imgUrl}
                        alt={`gallery-${item.UUID}`}
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 
                                (max-width: 1200px) 75vw, 
                                50vw"
                        className="mb-4 w-full rounded-lg"
                        quality={70}
                    />
                </div>
                ))}
            </div>
        </div>
        </>
    )
}