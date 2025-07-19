const baseUrl = import.meta.env.VITE_API_URL;

export const sendInterview = async (messages: any[]) => {
  try {
    const res = await fetch(`${baseUrl}/api/interview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!res.ok) {
      throw new Error(`Interview API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Interview request failed:", err);
    throw err;
  }
};

export const sendResume = async (messages: any[]) => {
  try {
    const res = await fetch(`${baseUrl}/api/resume`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!res.ok) {
      throw new Error(`Resume API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Resume request failed:", err);
    throw err;
  }
};

export const createCheckoutSession = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/checkout`, {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Checkout API error: ${res.status}`);
    }

    const { url } = await res.json();
    return url;
  } catch (err) {
    console.error("Stripe checkout failed:", err);
    throw err;
  }
};
