export const API_KEY = process.env.NEXT_PUBLIC_API_AUTHENTICATION ?? '';

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function authenticatedFetch(url: string, options: FetchOptions = {}) {
  const headers = {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
    ...options.headers, 
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`Error fetching: ${response.statusText}`);
  }

  return response.json();
}
