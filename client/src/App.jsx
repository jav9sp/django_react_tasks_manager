import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import TaskFormPage from "./pages/TaskFormPage";
import Navigation from "./components/Navigation";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container max-w-7xl mx-auto p-2">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
