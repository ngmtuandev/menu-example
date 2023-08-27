import React from "react";

const Menus = ({ data }) => {
  console.log("data : ", data);
  return (
    <div>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <span>name: {item.title}</span>
              <br />
              <span>category: {item.category}</span>
              <div>------</div>
            </div>
          );
        })}
    </div>
  );
};

export default Menus;
