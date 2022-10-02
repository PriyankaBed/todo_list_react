import { useState, useContext } from "react";
import { useTasks, useTasksDispatch } from "./TasksContext.js";
import deleteimage from "./delete-circle.png";
import editimage from "./edit.png";
import checkimage from "./checkbox.png";
import saveedit from "./save-edit.png";

export default function TaskList() {
    const tasks = useTasks();
    return (
        <div class='tasklist'>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        dispatch({
                            type: "changed",
                            task: {
                                ...task,
                                text: e.target.value,
                            },
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>
                    <img src={saveedit} />
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    <img src={editimage} />
                </button>
            </>
        );
    }
    return (
        <label>
            <input
                type='checkbox'
                checked={task.done}
                onChange={(e) => {
                    dispatch({
                        type: "changed",
                        task: {
                            ...task,
                            done: e.target.checked,
                        },
                    });
                }}
            />
            {taskContent}
            <img src={checkimage} />
            <button
                onClick={() => {
                    dispatch({
                        type: "deleted",
                        id: task.id,
                    });
                }}
            >
                <img src={deleteimage} />
            </button>
        </label>
    );
}
