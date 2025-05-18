import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTask,
  deleteTask,
  updateTask,
  getTaskById,
} from "../api/tasks.api";
import { toast } from "react-hot-toast";

export default function TaskFormPage() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const {
          data: { title, description },
        } = await getTaskById(params.id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Tarea Actualizada", {
        position: "bottom-right",
        duration: 4000,
        style: {
          backgroundColor: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Tarea Creada", {
        position: "bottom-right",
        duration: 4000,
        style: {
          backgroundColor: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/tasks");
  });

  const handleDelete = async () => {
    const accepted = window.confirm("¿Está seguro de eliminar?");
    if (accepted) {
      await deleteTask(params.id);
      toast.error("Tarea Eliminada", {
        position: "bottom-right",
        duration: 4000,
        style: {
          backgroundColor: "#101010",
          color: "#fff",
        },
      });
      navigate("/tasks");
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="">
        <input
          className="bg-zinc-700 p-3 rounded block w-full mb-3"
          type="text"
          placeholder="Título"
          {...register("title", { required: true })}
        />
        {errors.title && <span>El título es requerido</span>}
        <textarea
          className="bg-zinc-700 p-3 rounded block w-full mb-3"
          rows="3"
          placeholder="Descripción"
          {...register("description", { required: true })}></textarea>
        <button className="bg-indigo-500 p-3 rounded block w-full mt-3">
          Guardar
        </button>
        {errors.description && <span>La descripción es requerida</span>}
      </form>

      {params.id && (
        <button
          className="bg-red-500 p-3 rounded block w-full mt-3"
          onClick={handleDelete}>
          Eliminar
        </button>
      )}
    </div>
  );
}
