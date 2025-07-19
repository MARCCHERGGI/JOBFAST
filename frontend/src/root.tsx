// src/routes/root.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./index";
import InterviewPage from "./interview";
import ResumePage from "./resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}
