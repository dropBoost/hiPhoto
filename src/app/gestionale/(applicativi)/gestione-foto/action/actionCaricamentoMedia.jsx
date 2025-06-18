'use server'

import { supabaseServer } from '@/lib/supabaseServerClient';
import { v4 as uuidv4 } from 'uuid';

export const postMediaAction = async (formData) => {

  const dataEvento = formData.get('dataEvento');
  const tipologia = formData.get('tipologia');
  const wedding = formData.get('wedding')=== 'on';
  const event = formData.get('event')=== 'on';
  const bw = formData.get('bw')=== 'on';
  const baby = formData.get('baby')=== 'on';
  const food = formData.get('food')=== 'on';
  const visibile = formData.get('visibile')=== 'on';
  const posizione = formData.get('posizione');
  const dataUpload = new Date();

  const file = formData.get('file');

  if (!file || typeof file === 'string') {
    throw new Error('File non presente o non valido');
  }

  let fileUrl = '';

  if (file && typeof file === 'object' && file.name) {
    const fileExt = file.name.split('.').pop();
    const uniqueName = `${uuidv4()}.${fileExt}`;

    const { error: uploadError } = await supabaseServer.storage
    .from('mediafile')
    .upload(`uploads/${uniqueName}`, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type,
    });

    if (uploadError) {
    console.error('❌ Errore durante l\'upload del file:', {
        message: uploadError.message,
        details: uploadError.details,
        name: uploadError.name,
        hint: uploadError.hint
    });
    throw new Error(`Errore upload file: ${uploadError.message}`);
    }

    const { data: publicUrlData } = supabaseServer.storage
      .from('mediafile')
      .getPublicUrl(`uploads/${uniqueName}`);

    fileUrl = publicUrlData.publicUrl;
  }

  const { data, error } = await supabaseServer
    .from('mediaTable') // ✅ Nome della tua tabella
    .insert([
      {
        wedding,
        event,
        bw,
        baby,
        food,
        dataEvento,
        tipologia,
        posizione,
        visibile,
        dataUpload,
        imgUrl: fileUrl,
      },
    ]);

  if (error) {
    console.error('Errore Supabase INSERT:', error);
    throw new Error(`Errore inserimento dati: ${error.message}`);
  }

  return { success: true, data };
};