const SUPABASE_URL = 'https://ogfxwdqfdtaaoiuiclsh.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nZnh3ZHFmZHRhYW9pdWljbHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNjIsImV4cCI6MTk4MzY4NDA2Mn0.5JRX_e27xoEYI26VTDundVtD05vASo1z964M0KcbMNc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchDogs() {
    const response = await client.from('dog_breeds').select('*');
    return response.data;
}

export async function fetchWhales() {
    const response = await client.from('whale_species').select('*');
    return response.data;
}

export async function fetchPastas() {
    const response = await client.from('pasta_dishes').select('*');
    return response.data;
}

export async function fetchTravels() {
    const response = await client.from('travel_dest');
    return response.data;
}
