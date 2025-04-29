// Re-use or redefine ImageInfo if not importing from a shared types file
interface ImageInfo {
  url: string; // Note: Can be an empty string in the data
  alt: string;
}

// Define possible family relationships for Chimera Ants
interface ChimeraAntFamilyInfo {
  offspring?: string[];
  mother?: string;
  monarch?: string;
}

export interface ChimeraAnt {
  _id: number;
  name: string;
  japanese_name: string;
  also_known_as: string[];
  gender: "male" | "female" | "unknown";
  nen_type: string[];
  abilities: string[];
  professions: string[];
  img: ImageInfo;
  state: "alive" | "deceased";
  family: ChimeraAntFamilyInfo | {};
  hunter_star: 0 | 1; // Palm has hunter_star: 1
}
