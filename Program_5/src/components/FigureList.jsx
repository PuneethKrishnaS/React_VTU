import React, { useState } from "react";
import BasicFigure from "./BasicFigure";

export default function FigureList() {
  const [URL, setURL] = useState("");
  const [images, setImages] = useState([]);

  const handleURL = (e) => {
    setURL(e.target.value);
  };

  const addImage = () => {
    if (URL.trim()) {
      setImages([...images, {url : URL}]);
    }
    console.log(images);
    
  };

  const deleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index))
  };

  return (
    <div>
      <input type="text" onChange={handleURL} value={URL} />
      <button onClick={addImage}>Add Image</button>

      {images.map((image, index) => (
        <div key={index}>
          <BasicFigure source={image.url} caption={"link Image"} />
          <button onClick={() => deleteImage(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
