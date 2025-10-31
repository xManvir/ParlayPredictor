export type Comparator = "over" | "under"

export type StatType = 
| "Passing Yards"
| "Passing Touchdowns"
| "Rushing Yards"
| "Rushing Touchdowns"
| "Receiving Yards"
| "Receiving Touchdowns"
| "Receptions";

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