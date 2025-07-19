import { Elysia } from 'elysia';
import { createOpenAI } from './openai';
import { handleStripe } from './stripe';

const app = new Elysia();

app.get('/', () => 'Shift AI API');

app.post('/api/interview', async ({ request }) => {
  const body = await request.json();
  const response = await createOpenAI().chat.completions.create({
    model: 'gpt-4o',
    messages: body.messages,
  });
  return response;
});

app.post('/api/resume', async ({ request }) => {
  const body = await request.json();
  const response = await createOpenAI().chat.completions.create({
    model: 'gpt-4o',
    messages: body.messages,
  });
  return response;
});

app.post('/api/checkout', handleStripe);

// ✅ Use dynamic port for Render compatibility
app.listen({
  port: process.env.PORT || 3000
});

console.log(`API running on http://localhost:${process.env.PORT || 3000}`);
