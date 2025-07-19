import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, useDocumentHead } from '@builder.io/qwik-city';
import './global.css';

export default component$(() => {
  useDocumentHead({
    title: 'ShiftAI',
    meta: [
      { name: 'description', content: 'AI job prep for restaurant workers' },
      { property: 'og:title', content: 'ShiftAI' },
      { property: 'og:description', content: 'Smarter interviews and resumes' },
      { property: 'og:image', content: '/og.png' },
    ],
  });
  return (
    <QwikCity>
      <RouterOutlet />
    </QwikCity>
  );
});
