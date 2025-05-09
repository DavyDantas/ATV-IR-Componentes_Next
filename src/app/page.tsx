"use client"
import { useState } from "react";
import Form from "./componentes/form";
import TaskBox from "./componentes/taskBox";

export default function Home() {
  const [editedTaks, setEditedTask] = useState<{
    id: number;
    title: string;
    description: string;
  } | null>(null);
  const [tasks, setTasks] = useState([
    {
      id:1,
      title: "Exemplo de tarefa",
      description: "Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir.",
    },
    {
      id:2,
      title: "teste",
      description: "teste",
    },
  ]);
  const handleAddTask = (data: any) => {
    if (editedTaks !== null) {
      setTasks((tasks) => tasks.map((task) => (
        task.id === editedTaks.id ? { ...task, ...data } : task
      )));
      setEditedTask(null)
    } else {
      const newTask = {
        id: tasks.length + 1,
        title: data.title,
        description: data.description,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } 
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="bg-white mt-3.5">
      <main className="min-h-screen min-w-auto flex flex-col items-center justify-start gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-black">Lista de Tarefas</h1>
        </div>
        <div className="flex flex-col gap-4">
          <Form taskData={editedTaks} click={handleAddTask} />
        </div>
        <div className="flex flex-row w-[900px] flex-wrap gap-5">
          {tasks.map((task, index) => (
            <TaskBox
              key={index}
              title={task.title}
              description={task.description}
              editTask={() => setEditedTask((edit) => edit = task)}
              deleteTask={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
