import React from "react";

function Cart({ cartitem, add, items }) {
  return (
    <div className="flex justify-around items-center flex-wrap gap-2">
      {cartitem?.map((items, index) => (
        <div key={index} className="bg-white w-[45%] shadow-md rounded-md p-2">
          <div className="h-[6.5em] relative rounded-md border-2 border-gray-50">
            <div className=" w-full flex justify-center items-center h-full">
              <img className="drop-shadow-md w-auto h-[90%]" src={items.img} />
            </div>
            <div className="absolute right-[.2em] bottom-[0em]">
              {items.total == 0 ? "" : items.total + "kg"}
            </div>
          </div>

          <div>{items.item}</div>
          <div>{items.txt}</div>
          <div className="flex justify-between items-center">
            <div>ETB {items.price}/kg</div>
            <div className="flex gap-2">
              <button
                onClick={() => add(items.item, "min")}
                className="bg-[#fe9d34] w-[1.5em] h-[1.5em] rounded-sm"
              >
                -
              </button>
              <button
                onClick={() => add(items.item, "add")}
                className="bg-[#fe9d34] w-[1.5em] h-[1.5em] rounded-sm"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
