import { Request, Response } from "express";
import ryodanData from "../data/ryodan.json"; // Import Ryodan data

// Helper function to add base URL to Ryodan member image URL
// (Assuming the same structure and need as hunters)
const addBaseUrlToRyodanMember = (member: any, baseUrl: string) => {
  // Create a deep copy to avoid modifying the original data in memory
  const memberCopy = JSON.parse(JSON.stringify(member));
  if (
    memberCopy.img &&
    memberCopy.img.url &&
    memberCopy.img.url.startsWith("/")
  ) {
    // Only prepend base URL if it's a relative path
    memberCopy.img.url = `${baseUrl}${memberCopy.img.url}`;
  }
  return memberCopy;
};

export class RyodanController {
  public getAllRyodanMembers(req: Request, res: Response): void {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const membersWithAbsoluteUrls = ryodanData.map((member) =>
      addBaseUrlToRyodanMember(member, baseUrl)
    );
    res.json(membersWithAbsoluteUrls);
  }

  public getRyodanMemberById(req: Request, res: Response): void {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const member = ryodanData.find((m) => m._id.toString() === req.params.id);
    if (!member) {
      res.status(404).json({ message: "Ryodan member not found" });
      return;
    }
    const memberWithAbsoluteUrl = addBaseUrlToRyodanMember(member, baseUrl);
    res.json(memberWithAbsoluteUrl);
  }
}
