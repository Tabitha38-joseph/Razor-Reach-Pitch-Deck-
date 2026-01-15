export interface ComparisonData {
  year: string;
  proprietaryCost: number;
  universalCost: number;
}

export enum SlideType {
  INTRO = 'INTRO',
  PROBLEM = 'PROBLEM',
  SOLUTION = 'SOLUTION',
  MECHANISM = 'MECHANISM',
  MARKET = 'MARKET',
  BUSINESS = 'BUSINESS',
}
