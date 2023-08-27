import React from "react";

const Type = ({ type, onSetType }) => {
  return (
    <div
      onClick={() => {
        onSetType(type);
      }}
    >
      {type}
    </div>
  );
};

export default Type;
