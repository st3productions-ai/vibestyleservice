
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Defensive access to process.env to prevent ReferenceErrors in some environments
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    this.ai = new GoogleGenAI({ apiKey: apiKey || '' });
  }

  async transformHair(
    imageBase64: string, 
    color: string, 
    style: string, 
    includeColor: boolean, 
    includeStyle: boolean
  ): Promise<string> {
    let modeDescription = "";
    if (includeColor && includeStyle) {
      modeDescription = `Apply a high-ticket "${style}" haircut finished with a premium "${color}" color.`;
    } else if (includeColor) {
      modeDescription = `Keep the original haircut but transform the hair color to a high-luxury "${color}".`;
    } else if (includeStyle) {
      modeDescription = `Keep the original hair color but transform the hairstyle into a precise "${style}".`;
    } else {
      return imageBase64; // No changes requested
    }

    const prompt = `Act as a world-class celebrity hair colorist and stylist specializing in Bronx Luxury. 
    ${modeDescription}
    Focus on high-shine, realistic dimension, and luxury texture. 
    Maintain professional studio lighting. Only modify hair. High-end fashion editorial quality. 
    Ensure the blend is seamless and expensive-looking. Results should command a $500+ service fee.`;

    const response = await this.ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: imageBase64.split(',')[1] || imageBase64,
              mimeType: 'image/png',
            },
          },
          { text: prompt },
        ],
      },
    });

    let imageUrl = '';
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }
    }

    if (!imageUrl) throw new Error("Visualization Engine Offline.");
    return imageUrl;
  }

  async getVibeAnalysis(color: string, style: string, includeColor: boolean, includeStyle: boolean): Promise<string> {
    const combo = (includeColor && includeStyle) ? `a ${style} with ${color}` : (includeColor ? color : style);
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an elite salon business consultant in NYC. 
      Analyze the luxury market potential for "${combo}". 
      Explain why this specific look commands a high price point in a luxury Bronx studio. 
      Keep it confident, exclusive, and under 40 words.`
    });
    return response.text || '';
  }
}

export const geminiService = new GeminiService();
