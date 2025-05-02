import React, { useState } from "react";

export default function App() {
    const [name,setName] = useState("World")
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                color: "black",
            }}
        >
            <div>
                <h1>Hello {name}!</h1>
            </div>
            <div style={{ width: "400px" }}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        background: "rgba(0, 0, 0, 0.2)", // Light red transparent background
                        fontSize: "16px",
                        border: "rgba(41, 41, 41, 0.1) 1px solid ",
                        outline: "none",
                        transition:
                            "background 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onFocus={(e) => {
                        e.target.style.background = "rgba(150, 150, 150, 0.2)";
                        e.target.style.boxShadow =
                            "0 4px 12px rgba(0, 0, 0, 0.1)";
                    }}
                    onBlur={(e) => {
                        e.target.style.background = "rgba(56, 56, 56, 0.2)";
                        e.target.style.boxShadow = "none";
                    }}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}
