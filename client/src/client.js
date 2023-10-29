import { createClient } from '@supabase/supabase-js'

const URL = 'https://tujgollbxqutkbfelcuz.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1amdvbGxieHF1dGtiZmVsY3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2OTM4NjIsImV4cCI6MjA0NjI2OTg2Mn0.74WwjNxD4K-jsmFMBveBc3vJo_auDUR4kUFVdhvw2uo';

export const supabase = createClient(URL, API_KEY);