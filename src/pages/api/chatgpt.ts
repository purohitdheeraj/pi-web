import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,  // Use your OpenAI API key here
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    console.log('Prompt:', prompt);

    try {
      // Request OpenAI's completion API with the user input prompt
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Or any other model you prefer
        messages: [{ role: 'user', content: prompt }],
      });

      // Return the response back to the client
      res.status(200).json({ response: response.choices[0].message.content });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Something went wrong!' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
