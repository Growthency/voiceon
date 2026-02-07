import { createClient } from '@supabase/supabase-js'

// Environment variables gulo eibhabe access korte hobe
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Error handling jate URL khali thakle agei bujha jay
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase variables missing in .env.local!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)