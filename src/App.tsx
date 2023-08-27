import { useState, useEffect } from "react";

import "./App.css";
import Type from "./Type";
import Menus from "./Menus";
import data from "./data";
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
    <div>
      <div>
        {type.map((item, index) => {
          return (
            <div key={index}>
              <Type onSetType={setTypeCurrent} type={item}></Type>
            </div>
          );
        })}
      </div>
      <div>
        <Menus data={listDataForType}></Menus>
      </div>
    </div>
  );
}

export default App;
