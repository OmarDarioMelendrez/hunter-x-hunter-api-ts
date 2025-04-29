import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import huntersRoutes from "./routes/huntersRoutes";
import ryodanRoutes from "./routes/ryodanRoutes";
import chimeraAntsRoutes from "./routes/chimeraAntsRoutes";
import { DOMAIN, SITE_PORT } from "./lib/constants";
import swaggerDocument from "./swagger.json";
import { validateApiKey } from "./middleware/apiKeyAuth";
import { readFileSync } from "fs";
import { join } from "path";
import path from "path";

const app = express();
const PORT = process.env.PORT || SITE_PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "..", "public")));

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Swagger JSON endpoint
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocument);
});

// README endpoint
app.get("/readme", (req, res) => {
  try {
    const readmePath = join(__dirname, "..", "README.md");
    const readmeContent = readFileSync(readmePath, "utf-8");
    res.setHeader("Content-Type", "text/markdown");
    res.send(readmeContent);
  } catch (error) {
    console.error("Error serving README:", error);
    res.status(500).send("Error loading documentation");
  }
});

// Protect API routes with API key
app.use("/api", validateApiKey);

// Routes
app.use("/api/hunters", huntersRoutes);
app.use("/api/ryodan", ryodanRoutes);
app.use("/api/chimera-ants", chimeraAntsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger documentation available at ${DOMAIN}/api-docs`);
  console.log(`README documentation available at ${DOMAIN}/readme`);
});
