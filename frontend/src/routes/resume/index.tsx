import { component$, useStore, $ , type QRL } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

interface FormState {
  name: string;
  job: string;
  location: string;
  uses: number;
  pdfUrl?: string;
}

export default component$(() => {
  const state = useStore<FormState>({ name: '', job: '', location: '', uses: 0 });

  const buildResume = $(async () => {
    if (state.uses >= 3) {
      window.location.href = '/paywall';
      return;
    }
    const payload = {
      messages: [
        { role: 'system', content: 'You are a helpful assistant that writes resumes.' },
        { role: 'user', content: `Name: ${state.name}\nJob: ${state.job}\nLocation: ${state.location}` },
      ],
    };
    const api = import.meta.env.VITE_API_URL || '';
    const res = await fetch(`${api}/api/resume`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    state.pdfUrl = `${api}/api/resume.pdf?content=` + encodeURIComponent(data.choices[0].message.content);
    state.uses++;
  });


  return (
    <div class="p-4 space-y-4">
      <header class="flex justify-between text-gold font-bold glass p-4">
        <Link href="/">Home</Link>
        <h1>Resume Builder</h1>
        <div></div>
      </header>
      <form preventdefault:submit class="space-y-2 glass p-4" onSubmit$={buildResume as QRL<() => void>}>
        <input
          class="w-full p-2 rounded bg-transparent"
          placeholder="Name"
          value={state.name}
          onInput$={(e) => (state.name = (e.target as HTMLInputElement).value)}
        />
        <input
          class="w-full p-2 rounded bg-transparent"
          placeholder="Desired Job Title"
          value={state.job}
          onInput$={(e) => (state.job = (e.target as HTMLInputElement).value)}
        />
        <input
          class="w-full p-2 rounded bg-transparent"
          placeholder="Location"
          value={state.location}
          onInput$={(e) => (state.location = (e.target as HTMLInputElement).value)}
        />
        <button class="px-4 py-2 bg-gold text-black rounded w-full">Generate PDF</button>
      </form>
      {state.pdfUrl && (
        <a href={state.pdfUrl} class="text-gold underline">Download Resume</a>
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Resume Builder',
};
