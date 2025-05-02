"use client"
import { useState } from "react";
import Form from "./componentes/form";
import TaskBox from "./componentes/taskBox";

export default function Home() {

  const [tasks, setTasks] = useState([
    {
      title: "Exemplo de tarefa",
      description: "Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir.",
    },
    {
      title: "teste",
      description: "tsteste",
    },
  ]);
  const handleAddTask = (title: string, description: string) => {
    const newTask = {
      title,
      description,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="bg-white mt-3.5">
      <main className="min-h-screen min-w-auto flex flex-col items-center justify-start gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-black">Lista de Tarefas</h1>
        </div>
        <div className="flex flex-col gap-4">
          <Form click={() => handleAddTask("Nova Tarefa", "Descrição da nova tarefa")} />
        </div>
        <div className="flex flex-row w-[900px] flex-wrap gap-5">
          {tasks.map((task, index) => (
            <TaskBox
              key={index}
              title={task.title}
              description={task.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
