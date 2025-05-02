import React from "react";

export default function Footer({ footerText }) {
    return (
        <footer
            style={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
                marginTop: "20px",
            }}
        >
            <p>{footerText}</p>
        </footer>
    );
}
