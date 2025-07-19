import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet } from '@builder.io/qwik-city';
import './global.css';

export default component$(() => {
  return (
    <QwikCity>
      <RouterOutlet />
    </QwikCity>
  );
});
