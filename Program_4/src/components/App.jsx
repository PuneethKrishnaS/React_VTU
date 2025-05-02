import React from "react";
import ToDoFunction from "./ToDoFunction";

export default function App() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", marginTop: "20px" }}>
            <h1 style={{ textAlign: "center" }}>To-Do List</h1>
            <ToDoFunction />
        </div>
    );
}
