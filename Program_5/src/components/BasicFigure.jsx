import React from 'react'

export default function BasicFigure({id, removeImage}) {
  return (
    <div>
      <img src="image" alt="" />
      <p>Image</p>
      <button onClick={() => removeImage(id)}>Remove</button>
    </div>
  )
}
