import { useState, useContext } from "react";
import { useTasksDispatch } from "./TasksContext.js";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState("");
    const dispatch = useTasksDispatch();
    return (
        <div class='addTask'>
            <input class='addtask_te' placeholder='Enter New Task' value={text} onChange={(e) => setText(e.target.value)} />
            <button
                class='addbutton'
                onClick={() => {
                    setText("");
                    dispatch({
                        type: "added",
                        id: nextId++,
                        text: text,
                    });
                }}
            >
                +
            </button>
        </div>
    );
}

let nextId = 3;
