import React, { useState } from "react";
import "./TaskCard.css";
interface ITask {
  task: string;
}

export const TaskCard = ({ task }: ITask) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = task.length > 100;
  const displayText = expanded
    ? task
    : task.slice(0, 100) + (isLong ? "..." : "");
  return (
    <div className="task-card">
      <p>{displayText}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="see-more"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};
