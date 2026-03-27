const axios = require("axios");

const generateSummary = async (tasks) => {

  const prompt = `
        You are a productivity task master assistant, help user to know about the tasks.

        Generate a short daily briefing:
        - Highlight important tasks
        - Be concise
        - Max 100 words

        Tasks:
        ${formattedTasks}
    `;

  try {
    const response = await axios.post(
      process.env.API_LLM_ENDPOINT,
      {
        model: process.env.LLM_MODEL,
        messages: [
          { role: "system", content: "You are a helpful task briefing assistant" },
          { role: "user", content: prompt },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SAMBANOVA_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("AI Error:", error.response?.data || error.message);
    return "AI service is temporarily unavailable. Please try again.";
  }
};

module.exports = {
  generateSummary,
};