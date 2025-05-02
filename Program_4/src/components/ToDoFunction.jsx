import React, { useState } from "react";

export default function ToDoFunction() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    // Add task to list
    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, { text: input, completed: false }]);
            setInput(""); // Clear input after adding
        }
    };

    // Toggle task completion
    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    // Delete task from list
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ textAlign: "center" }}>
            {/* Input for adding tasks */}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new task..."
                style={{
                    padding: "10px",
                    width: "70%",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    outline: "none",
                }}
            />
            <button
                onClick={addTask}
                style={{
                    marginLeft: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Add Task
            </button>

            {/* Display tasks */}
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            backgroundColor: "#f9f9f9",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            marginTop: "5px",
                            textDecoration: task.completed
                                ? "line-through"
                                : "none",
                            color: task.completed ? "#999" : "#000",
                        }}
                    >
                        <span
                            onClick={() => toggleTask(index)}
                            style={{
                                cursor: "pointer",
                                flex: 1,
                                textAlign: "left",
                            }}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => deleteTask(index)}
                            style={{
                                padding: "5px 10px",
                                backgroundColor: "#f44336",
                                color: "white",
                                border: "none",
                                borderRadius: "3px",
                                cursor: "pointer",
                                marginLeft: "10px",
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
