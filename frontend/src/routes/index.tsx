import { component$ } from '@builder.io/qwik';
import { Link, useDocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useDocumentHead({
    title: 'AI for Restaurant Jobs',
    meta: [{ name: 'description', content: 'Smarter Interviews. Tailored Resumes.' }],
  });
  return (
    <div class="min-h-screen flex flex-col items-center justify-center p-4 text-center space-y-4">
      <h1 class="text-3xl font-bold text-gold">ShiftAI</h1>
      <p>Smarter Interviews. Tailored Resumes.</p>
      <div class="space-x-4">
        <Link href="/interview" class="px-4 py-2 bg-gold text-black rounded">Start Interview</Link>
        <Link href="/resume" class="px-4 py-2 bg-gold text-black rounded">Build Resume</Link>
      </div>
    </div>
  );
});
