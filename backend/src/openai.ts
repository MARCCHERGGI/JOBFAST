import { OpenAI } from 'openai';

export function createOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY || '';
  return new OpenAI({ apiKey });
}
