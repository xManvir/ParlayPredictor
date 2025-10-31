import type { Leg } from "../types/parlays";

const STORAGE_KEY = "parlayLegs";

export function saveLegs(legs: Leg[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(legs));
}

export function loadLegs(): Leg[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
