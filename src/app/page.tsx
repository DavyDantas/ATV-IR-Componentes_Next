import Form from "./componentes/form";

export default function Home() {
  return (
    <div className="bg-white mt-3.5">
      <main className="min-h-screen flex flex-col items-center justify-start gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-black">Lista de Tarefas</h1>
        </div>
        <div className="flex flex-col gap-4">
          <Form />
        </div>
      </main>
    </div>
  );
}
