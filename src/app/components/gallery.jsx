'use client'

import React, { useState, useEffect } from "react";
import '../style/gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark  } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const iconaChiusura = <FontAwesomeIcon icon={faXmark} className='text-xs m-1 hover:text-red-700' />

export const Gallery = ({ apiUrl }) => {

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
              sizes="100vw, 50vw"
              width={1200}
              height={800}
              quality={60}
            />
            <button onClick={() => SetModel(false)}>{iconaChiusura}</button>
        </div>
              <div className="gallery">
        {data.map((item) => (
          <div className="pics" key={item.UUID} onClick={() => getImg(item.imgUrl)}>
            <Image
              src={item.imgUrl}
              alt={`gallery-${item.UUID}`}
              width={500}
              height={300}
              layout="responsive"
              quality={70}
            />
          </div>
        ))}
      </div>
        </>
    )
}