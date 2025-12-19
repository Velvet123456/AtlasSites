import type { Express } from "express";
import type { Server } from "http";
import { defaultFeatures } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/features", async (req, res) => {
    res.json(defaultFeatures);
  });

  return httpServer;
}

export async function seedDatabase() {
  // No-op: all data is static
}
