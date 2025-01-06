import { getRandomItem } from '@tuskdesign/util';

export const NAMES = [
  "Brie",
  "Vinnie",
  "Romeo",
  "Kid",
  "Stella"
];

/* export function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
} */

export function getRandomName(): string {
  return getRandomItem(NAMES);
}
