import { useState, type ChangeEvent } from "react";
import "./TaskInput.css";

interface TaskInputProps {
  onAdd: (task: string) => void;
}

const TaskInput = ({ onAdd }: TaskInputProps) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = () => {
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="task-input-container">
      <h2>
        <img
          src="https://res.cloudinary.com/dnwseb0gu/image/upload/v1746802096/notes_msuedp.png"
          alt=""
          style={{ height: "18px", marginRight: "5px" }}
        />
        Note App
      </h2>
      <div className="task-input">
        <input
          value={value}
          placeholder="New Note..."
          onChange={handleChange}
          style={{ color: "black" }}
        />
        <button onClick={handleSubmit}>
          <span style={{ paddingTop: "2px" }}>
            <img
              src="https://res.cloudinary.com/dnwseb0gu/image/upload/v1746801467/plus_wyjzsm.png"
              alt="add"
              style={{
                borderRadius: "50%",
                backgroundColor: "white",
                // height: "15px",
                width: "10px",
                padding: "2px",
                verticalAlign: "middle",
                // marginTop: "6px",
                marginRight: "4px",
              }}
            />
          </span>
          <span style={{ verticalAlign: "middle" }}>Add</span>
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
