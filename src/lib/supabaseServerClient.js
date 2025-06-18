import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // usa la chiave "service role", NON anon key

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);
