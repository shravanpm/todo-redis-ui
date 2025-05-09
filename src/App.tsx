import { useEffect, useState } from "react";
import { TaskList } from "./components/TaskList/TaskList";
import axios from "axios";
import { config } from "./config/config";
import io from "socket.io-client";
import TaskInput from "./components/TaskInput/TaskInput";
const socket = io(config.baseUrl);
import "./App.css";

interface ITaskResponse {
  status: boolean;
  tasks: string[];
}

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios<ITaskResponse>({
        url: `${config.baseUrl}/api/fetchAllTasks`,
        method: "GET",
      });
      console.log({ length: data.tasks });
      setTasks(data?.tasks);
    } catch (error) {
      // TODO
    }
  };

  const addTask = (task: string) => {
    socket.emit("add", task);
  };

  useEffect(() => {
    fetchTasks();
    const handleUpdate = (task: string) => {
      setTasks((prev) => [...prev, task]);
    };

    socket.off("tasksUpdated");
    socket.on("tasksUpdated", handleUpdate);

    return () => {
      socket.off("tasksUpdated", handleUpdate);
    };
  }, []);

  return (
    <div className="container">
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
