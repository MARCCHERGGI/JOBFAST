import Stripe from 'stripe';
import { RequestHandler } from 'express';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});

export const handleStripe: RequestHandler = async (req, res) => {
  const { priceId } = req.body;
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: req.headers.origin + '/success',
    cancel_url: req.headers.origin + '/cancel',
  });
  res.json({ url: session.url });
};
