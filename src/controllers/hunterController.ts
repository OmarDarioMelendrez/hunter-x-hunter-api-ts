import { Request, Response } from "express";
import huntersData from "../data/hunters.json";

// Helper function to add base URL to hunter image URL
const addBaseUrlToHunter = (hunter: any, baseUrl: string) => {
  // Create a deep copy to avoid modifying the original data in memory
  const hunterCopy = JSON.parse(JSON.stringify(hunter));
  if (hunterCopy.img && hunterCopy.img.url) {
    hunterCopy.img.url = `${baseUrl}${hunterCopy.img.url}`;
  }
  return hunterCopy;
};

// Rename class
export class HunterController {
  // Replace method
  public getAllHunters(req: Request, res: Response): void {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    // Map over the hunters data to add the absolute URL
    const huntersWithAbsoluteUrls = huntersData.map((hunter) =>
      addBaseUrlToHunter(hunter, baseUrl)
    );
    res.json(huntersWithAbsoluteUrls);
  }

  // Rename method and update variable
  public getHunterById(req: Request, res: Response): void {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const hunter = huntersData.find((h) => h._id.toString() === req.params.id);
    if (!hunter) {
      res.status(404).json({ message: "Hunter not found" });
      return;
    }
    // Add the absolute URL to the single hunter object
    const hunterWithAbsoluteUrl = addBaseUrlToHunter(hunter, baseUrl);
    res.json(hunterWithAbsoluteUrl);
  }

  // Rename method and update variable/properties
  public getHuntersByNenType(req: Request, res: Response): void {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const nenType = req.params.type.toLowerCase();
    const filteredHunters = huntersData.filter((h) =>
      h.nen_type.map((type) => type.toLowerCase()).includes(nenType)
    );
    if (filteredHunters.length === 0) {
      res.status(404).json({ message: "No hunters found of this Nen type" });
      return;
    }
    // Map over the filtered results
    const huntersWithAbsoluteUrls = filteredHunters.map((hunter) =>
      addBaseUrlToHunter(hunter, baseUrl)
    );
    res.json(huntersWithAbsoluteUrls);
  }

  // Rename method and update variable/properties
  public getHunterAbilities(req: Request, res: Response): void {
    // This endpoint returns only abilities, no need to modify URLs
    const hunter = huntersData.find((h) => h._id.toString() === req.params.id);
    if (!hunter) {
      res.status(404).json({ message: "Hunter not found" });
      return;
    }
    res.json(hunter.abilities);
  }
}
