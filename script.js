const API_URL = 'https://4418c1d7060c8d8f.mokky.dev/'

async function fetchData() {
    const resp = await fetch(url);
    const data = await resp.json();

    if (!resp.ok) {
        throw new Error(data.message || 'Something went wrong');
    }

    return data;
}