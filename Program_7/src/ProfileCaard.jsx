import React from "react";
// import 'App.css'

export default function ProfileCaard({name,profilePath,bio,bgColor}) {
    return (
        <div className="Card" style={{ background: `${bgColor}` || "#1f1f1f" }}>
            <img
                src={profilePath}
                alt={`${name}'s Profile`}
                className="image"
                height={"120rem"}
                width={"120rem"}
            />
            <div className="inforHolder">
                <h1>{name}</h1>
                <p>{bio}</p>
                <div className="TechStack">
                    <span>Javascript</span>
                    <span>HTML</span>
                    <span>Node.js</span>
                </div>
            </div>
        </div>
    );
}
