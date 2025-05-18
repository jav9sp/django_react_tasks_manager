import { useNavigate } from "react-router-dom";

export default function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
      className="border rounded p-3 cursor-pointer bg-zinc-800 hover:bg-zinc-700">
      <h2 className="text-xl font-bold uppercase">{task.title}</h2>
      <p className="text-slate-400">{task.description}</p>
    </div>
  );
}
