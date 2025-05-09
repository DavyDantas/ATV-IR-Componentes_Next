import { Edit, Trash2 } from "@deemlol/next-icons";


interface TaskBoxProps {
    title: string;
    description: string;
    editTask: () => void;
    deleteTask: () => void;
}


export default function TaskBox({title, description, editTask, deleteTask}: TaskBoxProps) {
    return (
        <div className="p-6 pr-9 border border-gray-300 rounded-lg flex flex-col gap-5 w-[440px]">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center text-gray-950 font-medium text-xl">
                    <input id="cb" name="cb" type="checkbox" className="mr-2 w-4 h-4"/>
                    <label htmlFor="cb">
                        <h2>{title}</h2>
                    </label>
                </div>
                <div className="flex flex-row gap-6 items-center justify-end">
                <Edit onClick={editTask} size={18} color="#000000" className="cursor-pointer"/>
                <Trash2 onClick={deleteTask} size={18} color="#000000" className="cursor-pointer"/>
                </div>
            </div>
                <span className="text-gray-600">{description}</span>
        </div>
    );
}