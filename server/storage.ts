import { type Feature } from "@shared/schema";

export const defaultFeatures: Feature[] = [
  { id: 1, name: "Aimbot", description: "Precision aiming assistance", category: "Combat" },
  { id: 2, name: "Silent Aim", description: "Hit targets without looking directly at them", category: "Combat" },
  { id: 3, name: "ESP", description: "See players and items through walls", category: "Visuals" },
  { id: 4, name: "Fly", description: "Flight movement modifier", category: "Movement" },
  { id: 5, name: "Speed", description: "Enhanced movement speed", category: "Movement" },
];
