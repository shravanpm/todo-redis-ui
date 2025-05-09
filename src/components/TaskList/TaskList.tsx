import { TaskCard } from "../TaskCard/TaskCard";
import "./TaskList.css";

interface ITaskListProps {
  tasks: string[];
}

export const TaskList = ({ tasks }: ITaskListProps) => {
  return (
    <div>
      <div style={{ height: "1.5em" }}>
        <h4 style={{ borderBottom: "1px solid rgb(154, 154, 154)" }}>Notes</h4>
      </div>
      <div className="task-list">
        {tasks.map((task, i) => (
          <TaskCard key={i} task={task} />
        ))}
      </div>
    </div>
  );
};
