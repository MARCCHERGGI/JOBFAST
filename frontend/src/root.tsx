// src/root.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InterviewPage from "./routes/interview/index";
import ResumePage from "./routes/resume/index";
import PaywallPage from "./routes/paywall/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="text-white">Home</h1>} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/paywall" element={<PaywallPage />} />
      </Routes>
    </BrowserRouter>
  );
}
