import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uyggghwuagbfotthnjwc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5Z2dnaHd1YWdiZm90dGhuandjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NTA3MDgsImV4cCI6MjA2OTQyNjcwOH0.sHaEn_5KYJPiYtEyNBHuvPh82j4viDtKnF0LXIybN0o'
export const supabase = createClient(supabaseUrl, supabaseKey)
