import { Plus } from "@deemlol/next-icons"
import { useEffect } from "react";
import { useForm } from "react-hook-form";


interface FormProps {
  click: (data:any) => void;
  taskData?: {
    id: number;
    title: string;
    description: string;
  } | null;
}

export default function Form( {click, taskData}: FormProps) {
  const {register, handleSubmit, setValue} = useForm()

  const onSubmit = (data: any) => {
    console.log(data);
    setValue("title", "")
    setValue("description", "")
    return click(data);
  };

  useEffect(() => {
    if (taskData) {
      setValue("title", taskData.title);
      setValue("description", taskData.description);
    }
  }, [taskData]);

  return (
    <div className="p-6 border border-gray-300 rounded-lg flex flex-col gap-4 min-w-[900px]">
      <h1 className="text-black font-bold text-xl my-2">Nova Tarefa</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <input
            {...register("title", { required: true })}
            required
            type="text" 
            placeholder="Título da tarefa" 
            className="p-2 border border-gray-300 rounded-lg text-black font-medium text-[15px] placeholder-gray-600 focus:outline-none"
            />
            <textarea
            {...register("description", { required: true })}
            required 
            placeholder="Descrição (opcional)" 
            className="p-2 border text-black border-gray-300 rounded-lg min-h-[100px] resize-y placeholder-gray-600 focus:outline-none"
            />
            <button 
              type="submit" 
              className="cursor-pointer p-3 bg-gray-900 font-semibold text-white rounded-lg flex items-center justify-center gap-3"
            > 
              <Plus size={24} color="#FFFFFF" /> 
              {taskData ? "Atualizar Tarefa" : "Adicionar Tarefa"}
            </button>
        </form>
    </div>
  );
}

