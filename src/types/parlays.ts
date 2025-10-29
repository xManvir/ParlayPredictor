export type Comparator = "over" | "under"

export type StatType = 
| "passingYards"
| "passingTD"
| "rushingYards"
|"rushingTD"
|"receivingYards"
|"receivingTD"
|"receptions";

export interface Leg {
    id: string;
    playerName: string;
    team: string;
    statType: StatType;
    line: number;
    comparator: Comparator;
    currentValue?: number;
    isHit?: boolean;
}

export interface Parlay {
    id: string;
    name: string;
    createdAt: string;
    legs: Leg[];
}