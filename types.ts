
export interface VibePalette {
  name: string;
  color: string;
}

export interface Hairstyle {
  id: string;
  name: string;
  description: string;
}

export interface GenerationResult {
  beforeUrl: string;
  afterUrl: string;
  technique: string;
  colorName: string;
  styleName: string;
}

export interface LeadData {
  Name: string;
  Phone: string;
  Email: string;
  BusinessName: string;
  EmployeeSize: string;
}

export enum Technique {
  BALAYAGE = 'Signature Balayage',
  BLEACH_TONE = 'Full Bleach & Tone',
  MONEY_PIECE = 'Money Piece Accent',
  FANTASY = 'Global Fantasy Color'
}
