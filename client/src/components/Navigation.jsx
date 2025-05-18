import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">TasksApp</h1>
      </Link>
      <button>
        <Link
          className="bg-indigo-500 hover:bg-indigo-700 px-3 py-2 rounded"
          to="/tasks-create">
          Create Task
        </Link>
      </button>
    </div>
  );
}
