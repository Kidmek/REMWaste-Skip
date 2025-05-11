import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Skip } from "../types/skip";

interface SkipContextType {
  selectedSkipId: number | null;
  setSelectedSkipId: (id: number | null) => void;
  selectedSkip: Skip | null;
  setSkips: (skips: Skip[]) => void;
  skips: Skip[];
}

const SkipContext = createContext<SkipContextType | undefined>(undefined);

interface SkipProviderProps {
  children: ReactNode;
}

export function SkipProvider({ children }: SkipProviderProps) {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const [skips, setSkips] = useState<Skip[]>([]);

  const selectedSkip = selectedSkipId
    ? skips.find((skip) => skip.id === selectedSkipId) || null
    : null;

  return (
    <SkipContext.Provider
      value={{
        selectedSkipId,
        setSelectedSkipId,
        selectedSkip,
        skips,
        setSkips,
      }}
    >
      {children}
    </SkipContext.Provider>
  );
}

export function useSkipContext() {
  const context = useContext(SkipContext);

  if (context === undefined) {
    throw new Error("useSkipContext must be used within a SkipProvider");
  }

  return context;
}
