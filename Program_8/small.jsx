import React, { useState } from "react";

export default function App() {
    const [formData, setFormData] = useState({ task: "", date: "", description: "" });
    const [storedData, setStoredDate] = useState([]);
    const [filterStatus, setFilterStatus] = useState("all");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const submitForm = () => {
        if (formData.task.length === 0 && formData.date.length === 0) return;
        const newTaskList = {
            id: Date.now(),
            task: formData.task,
            date: formData.date,
            description: formData.description,
            status: "pending",
        };
        setStoredDate([...storedData, newTaskList]);
        setFormData({ task: "", date: "", description: "" });
    };

    const handleFilterChange = (status) => {
        setFilterStatus(status);
    };

    const filteredData = storedData.filter((task) => {
        if (filterStatus === "all") return true;
        return task.status === filterStatus;
    });

    return (
        <>
            <form>
                <input type="text" placeholder="Task name" name="task" value={formData.task} required onChange={handleChange}/>
                <input type="datetime-local" name="date" value={formData.date} required onChange={handleChange}/>
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                <input type="button" value="ADD" onClick={submitForm} />
            </form>

            <button onClick={() => handleFilterChange("all")}>All</button>
            <button onClick={() => handleFilterChange("completed")}>Completed</button>
            <button onClick={() => handleFilterChange("pending")}>Pending</button>

            {filteredData.map((data) => (
                <section key={data.id}>
                    <h3>{data.task}</h3>
                    <small>{data.date}</small>
                    <p>{data.description}</p>
                    <select name="status" value={data.status}
                        onChange={(e) => {
                            const updated = storedData.map((task) =>
                                task.id === data.id
                                    ? { ...task, status: e.target.value }
                                    : task
                            );
                            setStoredDate(updated);
                        }}
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </section>
            ))}
        </>
    );
}