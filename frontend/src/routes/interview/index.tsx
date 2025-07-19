import { component$, useStore, $, useVisibleTask$ } from '@builder.io/qwik';
import { Link, useDocumentHead } from '@builder.io/qwik-city';
import type { QRL } from '@builder.io/qwik';

interface Message { role: 'user' | 'assistant'; content: string; }

export default component$(() => {
  const state = useStore({
    messages: [] as Message[],
    input: '',
    loading: false,
  });

  const sendMessage = $(async () => {
    if (!state.input) return;
    state.messages.push({ role: 'user', content: state.input });
    const payload = { messages: state.messages };
    state.loading = true;
    const res = await fetch('/api/interview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    state.messages.push({ role: 'assistant', content: data.choices[0].message.content });
    state.input = '';
    state.loading = false;
  });

  useDocumentHead({ title: 'Interview' });

  useVisibleTask$(() => {
    const input = document.getElementById('message-input');
    input?.focus();
  });

  return (
    <div class="flex flex-col h-screen">
      <header class="p-4 text-gold font-bold flex justify-between">
        <Link href="/">Home</Link>
        <h1>Interview</h1>
        <div></div>
      </header>
      <main class="flex-1 overflow-y-auto space-y-2 p-4">
        {state.messages.map((m, i) => (
          <div key={i} class={m.role === 'user' ? 'text-right' : 'text-left'}>
            <span class="px-3 py-2 rounded bg-gray-700 inline-block max-w-xs">
              {m.content}
            </span>
          </div>
        ))}
        {state.loading && <div class="text-left">...</div>}
      </main>
      <form preventdefault:submit class="p-4 flex" onSubmit$={sendMessage as QRL<() => void>}>
        <input id="message-input" class="flex-1 bg-gray-800 p-2 rounded" bind:value={state.input} />
        <button class="ml-2 px-4 py-2 bg-gold text-black rounded" disabled={state.loading}>Send</button>
      </form>
    </div>
  );
});
