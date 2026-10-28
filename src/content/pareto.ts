export interface Config {
  id: string
  speed: number
  quality: number
}

// illustrative sample points, not measured results
export const CONFIGS: Config[] = [
  { id: 'A', speed: 0.12, quality: 0.9 },
  { id: 'B', speed: 0.3, quality: 0.84 },
  { id: 'C', speed: 0.2, quality: 0.62 },
  { id: 'D', speed: 0.46, quality: 0.74 },
  { id: 'E', speed: 0.58, quality: 0.66 },
  { id: 'F', speed: 0.38, quality: 0.5 },
  { id: 'G', speed: 0.7, quality: 0.52 },
  { id: 'H', speed: 0.84, quality: 0.4 },
  { id: 'I', speed: 0.52, quality: 0.38 },
  { id: 'J', speed: 0.28, quality: 0.36 },
  { id: 'K', speed: 0.66, quality: 0.28 },
  { id: 'L', speed: 0.9, quality: 0.2 },
]

/** configs no other config beats on both axes, ordered by speed */
export function paretoFrontier(points: Config[]): Config[] {
  return points
    .filter((p) => !points.some((o) => o !== p && o.speed >= p.speed && o.quality >= p.quality && (o.speed > p.speed || o.quality > p.quality)))
    .sort((a, b) => a.speed - b.speed)
}
