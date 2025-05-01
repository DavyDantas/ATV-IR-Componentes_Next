interface TaskBoxProps {
    title: string;
    description: string;
}


export default function taskBox({title, description}: TaskBoxProps) {
    return (
        <div className="p-5 border border-gray-300 rounded-lg flex flex-col gap-4">
            <div>
                <input id="cb" name="cb" type="checkbox" className="mr-2"/>
                <label htmlFor="cb">
                    <h2>{title}</h2>
                </label>
            </div>
                <span className="text-gray-600">{description}</span>
        </div>
    );
}