const axios = require("axios");

const generateSummary = async (tasks) => {
  const prompt = `
        You are a productivity task master assistant, help user to know about the tasks.

        Generate a short daily briefing:
        - Highlight important tasks
        - Be concise
        - Max 100 words

        Instructions:
         - dont use **, * or such things in response

        Tasks:
        ${tasks}
    `;

  try {

    const GEMINI_API_KEY = process.env.API_KEY;
    
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("AI Error:", error.response?.data || error.message);
    return "AI service is temporarily unavailable. Please try again.";
  }
};

module.exports = {
  generateSummary,
};