import { useMemo, useState } from "react";
import type { Skip } from "../types/skip";
import { useSkipContext } from "../contexts/SkipContext";
import { calculateTotalPrice as calcPrice } from "../lib/skip-utils";

type FilterType = "all" | "road" | "heavy";

export function useSkipFilters(skips: Skip[]) {
  const [filter, setFilter] = useState<FilterType>("all");
  const { selectedSkipId } = useSkipContext();

  const filteredSkips = useMemo(() => {
    return skips.filter((skip) => {
      if (filter === "road") return skip.allowed_on_road;
      if (filter === "heavy") return skip.allows_heavy_waste;
      return true;
    });
  }, [skips, filter]);

  const sortedSkips = useMemo(() => {
    return [...filteredSkips].sort((a, b) => a.size - b.size);
  }, [filteredSkips]);

  const calculateTotalPrice = (skip: Skip) => {
    return calcPrice(skip);
  };

  return {
    filter,
    setFilter,
    selectedSkipId,
    filteredSkips,
    sortedSkips,
    calculateTotalPrice,
  };
}
