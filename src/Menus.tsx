import React from "react";

const Menus = ({ data }) => {
  console.log("data : ", data);

  return (
    <div className="grid grid-cols-3 gap-5">
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id} className="flex mb-5 w-[300px] flex-col">
              <img
                src={item.img}
                className="w-[300px] rounded-md shadow-xl h-[200px]"
                alt=""
              />
              <div className="flex my-3 items-center">
                <span className="mr-3 text-gray-800 font-semibold text-[22px]">
                  {item.title}
                </span>
                <div className="px-2 py-1 bg-yellow-500 rounded-md text-gray-100 font-medium">
                  {item.price}
                </div>
              </div>
              <div>
                <span className="text-gray-600 font-normal text-[15px]">
                  {item.desc}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Menus;
