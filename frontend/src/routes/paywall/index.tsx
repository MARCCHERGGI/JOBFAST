import { component$ } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useDocumentHead({ title: 'Unlock Full Access' });
  return (
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="glass p-6 text-center space-y-4 w-full max-w-md">
        <h1 class="text-2xl">Unlock full access</h1>
        <p class="text-gray-400">Purchase to continue generating resumes and interviews.</p>
        <form action="/api/checkout" method="post" class="space-y-2">
          <input type="hidden" name="priceId" value="price_123" />
          <button class="w-full px-4 py-2 bg-gold text-black rounded">Checkout</button>
        </form>
      </div>
    </div>
  );
});
