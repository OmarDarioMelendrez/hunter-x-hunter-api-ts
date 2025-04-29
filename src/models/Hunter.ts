interface ImageInfo {
  url: string;
  alt: string;
}

// Define possible family relationships found in the data
interface HunterFamilyInfo {
  father?: string;
  son?: string;
  aunt?: string;
  siblings?: string[];
  clan?: string;
  descendants?: string;
  sibling?: string; // Added for Elena
}

export interface Hunter {
  _id: number;
  name: string;
  japanese_name: string;
  also_known_as: string[];
  gender: "male" | "female" | "unknown"; // Made specific based on data
  nen_type: string[]; // Could be more specific enum if desired
  abilities: string[];
  professions: string[];
  img: ImageInfo;
  state: "alive" | "deceased"; // Made specific based on data
  family: HunterFamilyInfo | {}; // Use the specific family interface or an empty object
  hunter_star: 0 | 1 | 3; // Made specific based on data
}
