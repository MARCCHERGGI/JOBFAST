const API_URL = import.meta.env.VITE_API_URL;

export const sendInterview = async (messages: any[]) => {
  const res = await fetch(`${API_URL}/api/interview`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  return res.json();
};

export const sendResume = async (messages: any[]) => {
  const res = await fetch(`${API_URL}/api/resume`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  return res.json();
};
