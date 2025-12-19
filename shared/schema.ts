import { z } from "zod";

export const featureSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
});

export type Feature = z.infer<typeof featureSchema>;
