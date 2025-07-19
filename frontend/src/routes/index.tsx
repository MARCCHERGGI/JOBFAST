// src/routes/index.tsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Shift AI – Get Hired Faster</h1>
      <Link to="/interview" className="bg-white text-black px-6 py-3 rounded-lg mb-4">
        Start Interview
      </Link>
      <Link to="/resume" className="border border-white px-6 py-3 rounded-lg">
        Build Resume
      </Link>
    </div>
  );
}
