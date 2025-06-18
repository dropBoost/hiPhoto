// app/api/gallery/route.js
import { supabaseServer } from '@/lib/supabaseServerClient';

export async function GET() {
  const { data, error } = await supabaseServer
    .from('mediaTable')
    .select('*')

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}