'use server';

import { supabaseServer } from '@/lib/supabaseServerClient';

export const getMediaData = async () => {

  const { data, error } = await supabaseServer
    .from('mediaTable')
    .select('*') // Puoi mettere colonne specifiche se vuoi

  if (error) {
    console.error('Errore nel recupero dati:', error);
    return null;
  }

  return data;
};