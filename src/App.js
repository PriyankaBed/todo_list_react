import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { TasksProvider } from "./TasksContext.js";

export default function TaskApp() {
    return (
        <div class='main'>
            <TasksProvider>
                <h1>To-Do List</h1>
                <AddTask />
                <TaskList />
            </TasksProvider>
        </div>
    );
}
