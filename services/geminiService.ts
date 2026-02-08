import { GoogleGenAI } from "@google/genai";
import { SERVICES } from "../constants";

export const getAiRecommendation = async (userQuery: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing for Gemini");
    return "I recommend scheduling a general diagnostic check so we can inspect the issue personally.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct a context-aware prompt
    const servicesList = SERVICES.map(s => `${s.title} (ID: ${s.id})`).join(", ");
    const prompt = `
      You are an expert mechanic at Breda AutoFix. 
      The customer describes a problem: "${userQuery}".
      
      Based on this description, recommend the most likely service they need from our list:
      [${servicesList}]
      
      If the problem is unclear or sounds dangerous, recommend "Engine Diagnostics".
      Keep your answer helpful, short (max 2 sentences), and friendly. 
      End with "I suggest booking: [Service Name]".
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "I couldn't quite catch that. Please try describing the issue differently.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please check the service list manually.";
  }
};