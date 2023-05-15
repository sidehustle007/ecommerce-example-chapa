import React, { useState } from "react";
import Tocheckout from "./tocheckout";

function Total({ cartitem }) {
  const [show, setShow] = useState(false);
  const totalprice = cartitem.reduce(
    (sum, item) => sum + item.price * item.total,
    0
  );
  return (
    <div className="flex justify-between p-2 flex-col h-[17%] relative">
      <div className="font-bold flex justify-end">
        <button className="rotate-90" onClick={() => setShow(!show)}>
          |||
        </button>
      </div>
      <div className="w-full text-4xl flex justify-center mb-[.5em]">
        Addis Mirte Grocery
      </div>
      <input
        type="text"
        placeholder="search items"
        className="bg-white rounded-md h-[3em] p-2 outline-none border-2 border-[#fe9d34]"
      />
      {show && (
        <div className="bg-white border-l-2 border-[#fe9d34] w-[85%] custome-ani z-[5] h-screen absolute top-0 right-0 flex flex-col justify-between">
          <div className="flex justify-between w-full p-2 items-center">
            <button
              className="flex items-center"
              onClick={() => setShow(!show)}
            >
              close
            </button>
            <div>total: {totalprice} ETB</div>
          </div>
          <div className="h-full overflow-y-scroll scrollbar-hide">
            <div className="gap-2 flex flex-wrap p-2">
              {cartitem?.map(
                (items, index) =>
                  items.total > 0 && (
                    <div
                      key={index}
                      className="bg-white flex w-[100%] relative rounded-md p-2 border-[1px] border-gray-200"
                    >
                      <div className="h-[7em] relative rounded-md">
                        <div className=" w-full flex justify-center items-center h-full">
                          <img
                            className="drop-shadow-md w-auto h-[90%]"
                            src={items.img}
                          />
                        </div>
                      </div>
                      <div className="absolute right-[.4em] bottom-[.2em]">
                        {items.total == 0 ? "" : items.total}kg
                      </div>
                      <div className="flex flex-col justify-center items-center w-full">
                        <div>{items.item}</div>
                        <div className="flex justify-between items-center">
                          <div>{items.total * items.price} ETB</div>
                        </div>
                      </div>
                    </div>
                  )
              )}
              {totalprice == 0 && (
                <div className="h-[20%] w-full flex justify-center items-center">
                  nothing to show
                </div>
              )}
            </div>
          </div>
          <Tocheckout totalprice={totalprice} />
        </div>
      )}
    </div>
  );
}

export default Total;
