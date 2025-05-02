import React, { useState } from "react";
import BasicFigure from "./BasicFigure";

export default function FigureList() {
    const [figures, setFigures] = useState([{id: Date.now()}]);

    const appendImage = () => {
        setFigures([...figures, { id: Date.now() }]);
    };

    const removeImage = (id) => {
        setFigures(figures.filter((figure) => figure.id !== id));
    };

    return (
        <div>
            <button onClick={appendImage}>Add Image</button>
            {figures.map((figure) => (
                <BasicFigure key={figure.id} id={figure.id} removeImage={removeImage} />
            ))}
        </div>
    );
}
