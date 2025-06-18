'use client';

import { useState, useEffect } from 'react';
import CardFoto from './cardFoto';
import { getMediaData } from '../action/actionGetMedia';

export default function GalleryMedia({ refreshTrigger }) {
  
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const data = await getMediaData();
    setMedia(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [refreshTrigger]); // <- Ricarica quando cambia

  return (
    <div className="flex flex-wrap gap-2 lg:h-[78vh] h-[13vh]">
      {loading ? (
        <p>Caricamento...</p>
      ) : media.length > 0 ? (
        media.map((item) => (
          <CardFoto
            key={item.UUID}
            posizione={item.posizione}
            evento={item.evento}
            linkMedia={item.imgUrl}
            dataEvento={item.dataEvento}
            tipologiaFile={item.tipologia}
            uuid={item.UUID}
          />
        ))
      ) : (
        <p>Nessun media disponibile</p>
      )}
    </div>
  );
}