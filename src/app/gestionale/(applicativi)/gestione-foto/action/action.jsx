'use server';

import { supabaseServer } from '@/lib/supabaseServerClient';

export const getMediaData = async () => {
  const { data, error } = await supabaseServer
    .from('mediaTable')
    .select('*'); // Puoi mettere colonne specifiche se vuoi

  if (error) {
    console.error('Errore nel recupero dati:', error);
    return null;
  }

  return data;
};

//FETCH PER OTTENERE UN SOLO MEDIA DAL DATABASE
export const getOneMediaAction = async (uuid) => {
   
     const { data, error } = await supabaseServer
    .from('mediaTable')
    .select('*')
    .eq('UUID', uuid)
    .single();

    if (error) {
        console.error('Errore fetch singolo media:', error);
        return null;
    }

    return data;

}

//FETCH PER MODIFICARE I MEDIA DAL DATABASE
export const putMediaAction = async (formData) => {
    
    const visibile = formData.get('visibile') || '';
    const id = formData.get('id');

    const mediaPutData = {
        visibile,
    };

    try {
        const res = await fetch(`${process.env.URL_MEDIA_PATCH}${id}/?user_field_names=true`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Token ${process.env.API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mediaPutData)
        });

        const json = await res.json();
        return json;

    } catch (error) {
        console.error('Errore nella richiesta:', error);
    }

}

//FETCH PER ELIMINARE I MEDIA DAL DATABASE

export const deleteMediaAction = async (uuid) => {
  try {
    // 1. Recupera il record dal DB
    const { data, error } = await supabaseServer
      .from('mediaTable')
      .select('*')
      .eq('UUID', uuid)
      .single();

    if (error || !data) {
      console.error('Errore durante il recupero del record:', error);
      throw new Error('Record non trovato');
    }

    // 2. Elimina il file dallo storage se c'è imgUrl
    if (data.imgUrl) {
      try {
        const url = new URL(data.imgUrl);
        const pathParts = url.pathname.split('/');
        const filePath = pathParts.slice(2).join('/'); // esclude /storage/v1/object

        const { error: storageError } = await supabaseServer.storage
          .from('mediafile')
          .remove([filePath]);

        if (storageError) {
          console.error('Errore durante la rimozione del file dallo storage:', storageError);
          // non blocchiamo il flusso se fallisce lo storage
        }
      } catch (urlError) {
        console.warn('URL img non valido, skip rimozione file:', urlError.message);
      }
    } else {
      console.warn('Nessun imgUrl presente, skip eliminazione file');
    }

    // 3. Elimina la riga dal DB
    const { error: deleteError } = await supabaseServer
      .from('mediaTable')
      .delete()
      .eq('UUID', uuid);

    if (deleteError) {
      console.error('Errore durante la cancellazione dal DB:', deleteError);
      throw new Error('Errore durante l\'eliminazione dal database');
    }

    return { success: true };
  } catch (err) {
    console.error('Errore finale in deleteMediaAction:', err.message);
    return { success: false, error: err.message };
  }
};