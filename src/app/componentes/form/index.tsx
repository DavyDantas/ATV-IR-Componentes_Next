import { Plus } from "@deemlol/next-icons"


interface FormProps {
  click: () => void;
}

export default function Form( {click}: FormProps) {
  return (
    <div className="p-6 border border-gray-300 rounded-lg flex flex-col gap-4 min-w-[900px]">
      <h1 className="text-black font-bold text-xl my-2">Nova Tarefa</h1>
        <form className="flex flex-col gap-4">
            <input 
            type="text" 
            placeholder="Título da tarefa" 
            className="p-2 border border-gray-300 rounded-lg text-black font-medium text-[15px] placeholder-gray-600 focus:outline-none"
            />
            <textarea 
            placeholder="Descrição (opcional)" 
            className="p-2 border text-black border-gray-300 rounded-lg min-h-[100px] resize-y placeholder-gray-600 focus:outline-none"
            ></textarea>
            <button 
              onClick={(e) => {
                e.preventDefault();
                click();
              }} 
              type="submit" 
              className="cursor-pointer p-3 bg-gray-900 font-semibold text-white rounded-lg flex items-center justify-center gap-3"
            > 
              <Plus size={24} color="#FFFFFF" /> 
              Adicionar Tarefa
            </button>
        </form>
    </div>
  );
}