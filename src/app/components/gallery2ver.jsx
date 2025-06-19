'use client'

import React, { useState, useEffect } from "react";
import '../style/gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark  } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const iconaChiusura = <FontAwesomeIcon icon={faXmark} className='text-xs m-1 hover:text-red-700' />

export const GalleryTwoVers = ({ apiUrl }) => {

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
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-2 p-3">
            {data.map((item) => (
            <div className="" key={item.UUID} onClick={() => getImg(item.imgUrl)}>
                <Image
                    src={item.imgUrl}
                    alt={`gallery-${item.UUID}`}
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 
                            (max-width: 1200px) 75vw, 
                            50vw"
                    className="w-auto h-full rounded-lg shadow-md object-cover"
                    quality={70}
                />
            </div>
            ))}
        </div>
        </>
    )
}