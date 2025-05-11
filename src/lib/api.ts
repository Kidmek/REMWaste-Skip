import type { Skip } from "../types/skip";

const API_BASE_URL = "https://app.wewantwaste.co.uk/api";

/**
 * Fetches skips for a given postcode and area
 */
export async function fetchSkipsByLocation(
  postcode: string,
  area: string
): Promise<Skip[]> {
  const url = `${API_BASE_URL}/skips/by-location?postcode=${encodeURIComponent(postcode)}&area=${encodeURIComponent(area)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch skips: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Fetches a single skip by ID
 */
export async function fetchSkipById(id: number): Promise<Skip> {
  const url = `${API_BASE_URL}/skips/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch skip: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
