import { Elysia } from 'elysia';
import { createOpenAI } from './openai';
import { handleStripe } from './stripe';
import PDFDocument from 'pdfkit';
import type { Readable } from 'stream';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

async function sendChat(req: ChatRequest) {
  return createOpenAI().chat.completions.create({
    model: 'gpt-4o',
    messages: req.messages,
  });
}

const app = new Elysia();

app.get('/', () => 'Shift AI API');

app.post('/api/interview', async ({ request }) => {
  const body = (await request.json()) as ChatRequest;
  return sendChat(body);
});

app.post('/api/resume', async ({ request }) => {
  const body = (await request.json()) as ChatRequest;
  return sendChat(body);
});

app.post('/api/checkout', handleStripe);

app.get('/api/resume.pdf', ({ request, set }) => {
  const url = new URL(request.url);
  const content = url.searchParams.get('content') || '';
  const doc = new PDFDocument({ margin: 50 });
  set.headers['Content-Type'] = 'application/pdf';
  const stream = doc as unknown as Readable;
  doc.fontSize(16).text('Resume', { align: 'center' }).moveDown();
  for (const line of content.split('\n')) {
    doc.fontSize(12).text(`• ${line}`, { indent: 20 });
  }
  doc.end();
  return stream;
});

app.listen(3000);
console.log('API running on http://localhost:3000');
