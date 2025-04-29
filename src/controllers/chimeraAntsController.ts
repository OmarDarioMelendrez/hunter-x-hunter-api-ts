import { Request, Response } from "express";
import chimeraAntsData from "../data/chimeraAnts.json"; // Import Chimera Ants data

// Helper function to add base URL to Chimera Ant image URL
const addBaseUrlToChimeraAnt = (ant: any, baseUrl: string) => {
  const antCopy = JSON.parse(JSON.stringify(ant));
  if (antCopy.img && antCopy.img.url && antCopy.img.url.startsWith("/")) {
    // Only prepend base URL if it's a relative path
    antCopy.img.url = `${baseUrl}${antCopy.img.url}`;
  }
  // Handle cases where img.url might be empty or missing
  else if (antCopy.img && !antCopy.img.url) {
    // Optionally set a default placeholder or leave it empty
    // antCopy.img.url = `${baseUrl}/images/placeholder.webp`;
  }
  return antCopy;
};

export class ChimeraAntsController {
  public getAllChimeraAnts(req: Request, res: Response): void {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const antsWithAbsoluteUrls = chimeraAntsData.map((ant) =>
      addBaseUrlToChimeraAnt(ant, baseUrl)
    );
    res.json(antsWithAbsoluteUrls);
  }

  public getChimeraAntById(req: Request, res: Response): void {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const ant = chimeraAntsData.find((a) => a._id.toString() === req.params.id);
    if (!ant) {
      res.status(404).json({ message: "Chimera Ant not found" });
      return;
    }
    const antWithAbsoluteUrl = addBaseUrlToChimeraAnt(ant, baseUrl);
    res.json(antWithAbsoluteUrl);
  }

  // Add other specific endpoints if needed (e.g., get by type, Royal Guard status)
}
