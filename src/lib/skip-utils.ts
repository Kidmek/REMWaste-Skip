import type { Skip } from "../types/skip";

/**
 * Calculates the VAT inclusive price for a skip
 */
export function calculateTotalPrice(skip: Skip): number {
  return skip.price_before_vat * (1 + skip.vat / 100);
}

/**
 * Formats the price as GBP currency
 */
export function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`;
}

/**
 * Filters skips based on the filter type
 */
export function filterSkips(
  skips: Skip[],
  filterType: "all" | "road" | "heavy"
): Skip[] {
  if (filterType === "all") return skips;

  return skips.filter((skip) => {
    if (filterType === "road") return skip.allowed_on_road;
    if (filterType === "heavy") return skip.allows_heavy_waste;
    return true;
  });
}

/**
 * Sorts skips by size in ascending order
 */
export function sortSkipsBySize(skips: Skip[]): Skip[] {
  return [...skips].sort((a, b) => a.size - b.size);
}

/**
 * Gets a skip by its ID
 */
export function getSkipById(skips: Skip[], id: number): Skip | undefined {
  return skips.find((skip) => skip.id === id);
}

/**
 * Formats skip size with "Yard" suffix
 */
export function formatSkipSize(size: number): string {
  return `${size} Yard${size === 1 ? "" : "s"}`;
}

/**
 * Gets a descriptive string for the skip's hiring period
 */
export function getHirePeriodText(days: number): string {
  return `${days} day${days === 1 ? "" : "s"} hire`;
}
