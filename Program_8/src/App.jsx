import React, { useState } from "react";

export default function App() {
    const [formData, setFormData] = useState({
        task: "",
        date: "",
        description: "",
    });
    const [storedData, setStoredDate] = useState([]);
    const [filterStatus, setFilterStatus] = useState("all");

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const submitForm = () => {
        if (formData.task.length === 0 || formData.date.length === 0) return "";
        const newTaskList = {
            id: Date.now(),
            task: formData.task,
            date: formData.date,
            description: formData.description,
            status: "pending",
        };
        setStoredDate([...storedData, newTaskList]);
        console.log(storedData);
    };

    const handleFilterChange = (status) => {
        setFilterStatus(status);
    };

    const filteredData = storedData.filter((task) => {
        if (filterStatus === "all") return true;
        return task.status === filterStatus;
    });

    return (
        <div className="h-dvh overflow-hidden bg-neutral-50 text-black justify-center items-center flex flex-col p-10   ">
            <form className="border-1 border-neutral-300 w-sm md:w-xl xl:w-2xl rounded-2xl p-5 flex flex-col gap-2 transition-all">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Task name"
                        name="task"
                        value={formData.task}
                        required
                        onChange={handleChange}
                        className="bg-neutral-100 border-1 border-neutral-300 rounded-md p-2 w-full active:border-none active:outline-none"
                    />
                    <input
                        type="datetime-local"
                        name="date"
                        value={formData.date}
                        required
                        onChange={handleChange}
                        className="bg-neutral-100 border-1 border-neutral-300 rounded-md p-2 w-full"
                    />
                </div>
                <textarea
                    name="description"
                    placeholder="Description (optional)"
                    value={formData.description}
                    onChange={handleChange}
                    className="bg-neutral-100 border-1 border-neutral-300 rounded-md p-2 w-full max-h-60 min-h-20"
                />
                <input
                    type="button"
                    value="ADD"
                    onClick={submitForm}
                    className="bg-neutral-800 text-white rounded-xl p-2 text-xl font-bold cursor-pointer hover:bg-neutral-700 transition-colors"
                />
            </form>

            <div className="items-start justify-center flex gap-4 my-10">
                <button
                    onClick={() => handleFilterChange("all")}
                    className={`py-1 px-4 text-black rounded-2xl cursor-pointer ${
                        filterStatus === "all"
                            ? "bg-neutral-800 text-white"
                            : "bg-none text-black"
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => handleFilterChange("completed")}
                    className={`py-1 px-4 text-black rounded-2xl cursor-pointer ${
                        filterStatus === "completed"
                            ? "bg-neutral-800 text-white"
                            : "bg-none text-black"
                    }`}
                >
                    Completed
                </button>
                <button
                    onClick={() => handleFilterChange("pending")}
                    className={`py-1 px-4 text-black rounded-2xl cursor-pointer ${
                        filterStatus === "pending"
                            ? "bg-neutral-800 text-white"
                            : "bg-none text-black"
                    }`}
                >
                    Pending
                </button>
            </div>

            <div className=" overflow-auto flex gap-10 flex-wrap justify-center items-center max-w-full scrollbar-hide">
                {filteredData.map((data) => (
                    <div
                        key={data.id}
                        className="border-1 rounded-xl border-neutral-300 p-5 max-w-xl w-sm md:min-w-md"
                    >
                        <div>
                            <div>
                                <div className="flex items-center gap-5 justify-between">
                                    <div className="text-xl">{data.task}</div>
                                    <div className="text-sm text-neutral-500 items-end flex justify-around ">
                                        {data.date}
                                    </div>
                                </div>
                                <p className="text-neutral-500 py-3">
                                    {data.description}
                                </p>
                            </div>
                            <div className="items-center justify-center flex ">
                                <select
                                    name="status"
                                    value={data.status}
                                    onChange={(e) => {
                                        const updated = storedData.map((task) =>
                                            task.id === data.id
                                                ? {
                                                      ...task,
                                                      status: e.target.value,
                                                  }
                                                : task
                                        );
                                        setStoredDate(updated);
                                    }}
                                    className=" cursor-pointer w-full items-center justify-center flex text-center bg-neutral-200 py-2 rounded-3xl"
                                >
                                    <option
                                        value="pending"
                                        className="bg-neutral-100"
                                    >
                                        Pending
                                    </option>
                                    <option
                                        value="completed"
                                        className="bg-neutral-100"
                                    >
                                        Completed
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
