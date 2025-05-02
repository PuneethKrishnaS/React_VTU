import React from "react";
import ProfileCaard from "./ProfileCaard";
import "./App.css";

export default function App() {
    return (
        <div className="CardHolder">
            <div className="CardContainer">
                <ProfileCaard
                    name="PuneethKrishna S Rakunde"
                    profilePath="../public/puneeth.png"
                    bio="Full Stack Developer | Coffee Lover | Lifelong Learner"
                    bgColor = "#fffffd"
                />
            </div>
        </div>
    );
}
