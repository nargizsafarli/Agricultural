
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ohahrraefamlvvbzcbwb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oYWhycmFlZmFtbHZ2YnpjYndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MDM1OTYsImV4cCI6MjA2MTE3OTU5Nn0.nK8ZrDr2fQsxjEWQRdt82LEBK3Q7C15Ci9HxdHPc988"
export const supabase = createClient(supabaseUrl, supabaseKey)
