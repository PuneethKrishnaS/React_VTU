import React from "react";

export default function Header({ title }) {
    return (
        <header
            style={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
            }}
        >
            <h1>{title}</h1>
        </header>
    );
}
