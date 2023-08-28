import { useState, useEffect } from "react";

import "./App.css";
import Type from "./Type";
import Menus from "./Menus";
import data from "./data";
import "./index.css";
function App() {
  const type = ["all", "breakfast", "lunch", "shakes"];
  const [typeCurrent, setTypeCurrent] = useState("all");
  console.log(typeCurrent);
  const [listDataForType, setListDataForType] = useState(data);
  useEffect(() => {
    if (typeCurrent === "all") {
      setListDataForType(data);
    } else {
      const newTypeCurr = data.filter((item) => item.category === typeCurrent);
      setListDataForType(newTypeCurr);
    }
  }, [typeCurrent]);
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h3
        className="text-yellow-400 uppercase font-semibold text-[25px] border-b-2 border-yellow-400
       w-[140px] flex justify-center items-center"
      >
        Our Menu
      </h3>
      <div className="flex">
        {type.map((item, index) => {
          return (
            <div
              key={index}
              className="mx-3 px-2 py-1 bg-yellow-400 text-gray-50 font-semibold rounded-md hover:bg-opacity-80 cursor-pointer my-6"
            >
              <Type onSetType={setTypeCurrent} type={item}></Type>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <Menus data={listDataForType}></Menus>
      </div>
    </div>
  );
}

export default App;
