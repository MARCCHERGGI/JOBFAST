import { Elysia } from 'elysia';
import { createOpenAI } from './openai';
import { handleStripe } from './stripe';
import PDFDocument from 'pdfkit';
import type { Readable } from 'stream';

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

app.get('/api/resume.pdf', ({ request, set }) => {
  const url = new URL(request.url);
  const content = url.searchParams.get('content') || '';
  const doc = new PDFDocument();
  set.headers['Content-Type'] = 'application/pdf';
  const stream = doc as unknown as Readable;
  doc.text(content);
  doc.end();
  return stream;
});

app.listen(3000);
console.log('API running on http://localhost:3000');
