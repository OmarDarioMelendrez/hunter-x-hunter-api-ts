// Re-use or redefine ImageInfo if not importing from a shared types file
interface ImageInfo {
  url: string;
  alt: string;
}

// Define possible family relationships for Ryodan members
interface RyodanFamilyInfo {
  siblings?: string[];
}

export interface RyodanMember {
  _id: number;
  name: string;
  japanese_name: string;
  also_known_as: string[];
  gender: "male" | "female"; // Specific to Ryodan data
  nen_type: string[];
  abilities: string[];
  professions: string[];
  img: ImageInfo;
  state: "alive" | "deceased";
  family: RyodanFamilyInfo | {};
  hunter_star: 0;
}
