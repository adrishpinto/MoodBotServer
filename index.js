import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Lvl1
app.post("/lvl1", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "answer the question with rudeness and some creativity give short answers max 6 lines",
        },
        { role: "user", content: message },
      ],
      model: "llama3-8b-8192",
    });

    res.json({ response: completion.choices[0].message.content, level: 1 });
  } catch (error) {
    console.error("Error during Groq API request:", error);
    res
      .status(500)
      .json({ error: "Something went wrong with the API request" });
  }
});

// lvl2
app.post("/lvl2", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Respond to the question but behave depressed with hints of existential crisses max 7 lines",
        },
        { role: "user", content: message },
      ],
      model: "llama3-8b-8192",
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error during Groq API request:", error);
    res
      .status(500)
      .json({ error: "Something went wrong with the API request" });
  }
});

// Lvl 3
app.post("/lvl3", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Answer the question normally but midway get distracted and give a completely different answer, max 8 lines ",
        },
        { role: "user", content: message },
      ],
      model: "llama3-8b-8192",
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error during Groq API request:", error);
    res
      .status(500)
      .json({ error: "Something went wrong with the API request" });
  }
});

// Lvl 4
app.post("/lvl4", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Respond in a semi-poetic way don't make it too complex max 8 lines",
        },
        { role: "user", content: message },
      ],
      model: "llama3-8b-8192",
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error during Groq API request:", error);
    res
      .status(500)
      .json({ error: "Something went wrong with the API request" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
