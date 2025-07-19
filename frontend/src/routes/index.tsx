import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="glass p-6 text-center space-y-4 w-full max-w-md">
        <h1 class="text-3xl font-bold text-gold">ShiftAI</h1>
        <p>Smarter Interviews. Tailored Resumes.</p>
        <div class="space-x-4">
          <Link href="/interview" class="px-4 py-2 bg-gold text-black rounded">Start Interview</Link>
          <Link href="/resume" class="px-4 py-2 bg-gold text-black rounded">Build Resume</Link>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'AI for Restaurant Jobs',
  meta: [
    { name: 'description', content: 'Smarter Interviews. Tailored Resumes.' },
  ],
};
