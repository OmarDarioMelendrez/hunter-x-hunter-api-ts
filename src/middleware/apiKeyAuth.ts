import { Request, Response, NextFunction } from "express";

// Read the comma-separated API keys from environment variables
const API_KEYS_STRING = process.env.API_KEYS;

// Split the string into an array and trim whitespace from each key
const VALID_API_KEYS = API_KEYS_STRING
  ? API_KEYS_STRING.split(",").map((key) => key.trim())
  : []; // Initialize as empty array if variable is not set

export const validateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const providedApiKey = req.headers["x-api-key"] as string; // Get API key from header

  // Check if the environment variable is set and contains any keys
  if (!API_KEYS_STRING || VALID_API_KEYS.length === 0) {
    console.error("API_KEYS environment variable is not set or is empty.");
    return res
      .status(500)
      .json({ message: "Internal Server Error: API Keys not configured" });
  }

  // Check if the provided key is included in the list of valid keys
  if (!providedApiKey || !VALID_API_KEYS.includes(providedApiKey)) {
    return res.status(401).json({ message: "Unauthorized: Invalid API Key" });
  }

  next(); // API Key is valid
};
