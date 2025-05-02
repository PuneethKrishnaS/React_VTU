import React, { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1); // Custom step value

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>{count}</h1>

            <input
                type="number"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
                style={{
                    marginBottom: "10px",
                    padding: "5px",
                    width: "60px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                }}
            />
            <p></p>

            <button
                onClick={() => setCount((prev) => prev + step)}
                style={{
                    margin: "5px",
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Increment
            </button>

            <button
                onClick={() =>
                    setCount((prev) => (prev - step < 0 ? 0 : prev - step))
                }
                style={{
                    margin: "5px",
                    padding: "10px 20px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Decrement
            </button>

            <button
                onClick={() => setCount(0)}
                style={{
                    margin: "5px",
                    padding: "10px 20px",
                    backgroundColor: "#2a2a2a",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Reset
            </button>
        </div>
    );
}
