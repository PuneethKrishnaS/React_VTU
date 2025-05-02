import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function App() {
    let date = new Date()
    const title = "My React Application";
    const footerText = `© ${date.getFullYear()} My App. All rights reserved.`;

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
            }}
        >
            {/* Fixed header at top */}
            <div
                style={{
                    position: "fixed",
                    top: "0",
                    width: "100%",
                    zIndex: "10",
                }}
            >
                <Header title={title} />
            </div>

            {/* Main content area */}
            <div style={{ marginTop: "80px", marginBottom: "40px" }}>
                <p>Welcome to the app! This is the main content area.</p>
            </div>

            {/* Fixed footer at bottom */}
            <div
                style={{
                    position: "fixed",
                    bottom: "0",
                    width: "100%",
                    zIndex: "10",
                }}
            >
                <Footer footerText={footerText} />
            </div>
        </div>
    );
}
