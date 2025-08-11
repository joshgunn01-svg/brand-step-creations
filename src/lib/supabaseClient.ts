import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Returns a Supabase client if URL and anon key are available via localStorage or injected globals
export function getSupabase(): SupabaseClient | null {
  try {
    const w = window as any;
    const url = localStorage.getItem("supabase_url") || w.__SUPABASE_URL__ || "";
    const anon = localStorage.getItem("supabase_anon") || w.__SUPABASE_ANON_KEY__ || "";
    if (!url || !anon) return null;
    return createClient(url, anon);
  } catch (e) {
    console.warn("Supabase init failed", e);
    return null;
  }
}
