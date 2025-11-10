'use server';

import { supabase } from '@/lib/supabase/supabaseClient';

export async function addUserProfile(full_name,bio,DOB,jobTitle,user_location) {

  const { data, error } = await supabase
    .from('profiles')
    .insert([{ full_name,bio,DOB,jobTitle ,user_location}]);

  if (error) throw new Error(error.message);
  return data;
}
