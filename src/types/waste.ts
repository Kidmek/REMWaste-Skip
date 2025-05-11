export interface WasteType {
  id: string;
  name: string;
  description: string;
  icon: string;
  examples: string[];
}

export type WasteTypeId =
  | "household"
  | "construction"
  | "garden"
  | "commercial";
