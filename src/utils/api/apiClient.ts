export async function apiGet<T>(endpoint: string): Promise<T> {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''; // will work without having .env.local as well
  const url = `${baseUrl}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GET ${url} failed: ${errorText}`);
  }

  return response.json();
}

// need to refactor and make it generic for all the HTTP methods like POST, PUT, DELETE etc.