import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changColor } from "../redux/theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const onClickChangeColor = () => {
    dispatch(changColor(color));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button onClick={onClickChangeColor}>Change Color</button>
    </div>
  );
}

export default ChangeColor;
