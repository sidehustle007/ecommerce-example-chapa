import { useState } from "react";
import Total from "./components/total";
import Cart from "./components/cart";
import Btm from "./components/btm";

function App() {
  const items = [
    {
      item: "Orange",
      img: "https://cdn.pixabay.com/photo/2016/03/03/17/15/fruit-1234657_640.png",
      price: 60,
      txt: "32 cal",
      total: 0,
    },
    {
      item: "Apple",
      img: "https://cdn.pixabay.com/photo/2017/09/10/18/11/apple-2736410_640.png",
      price: 120,
      txt: "92 cal",
      total: 0,
    },
    {
      item: "Mango",
      img: "https://cdn.pixabay.com/photo/2016/02/23/17/36/mango-1218147_960_720.png",
      price: 75,
      txt: "80 cal",
      total: 0,
    },
    {
      item: "Strawberry",
      img: "https://cdn.pixabay.com/photo/2018/07/27/02/30/strawberries-3565102_640.png",
      price: 70,
      txt: "41 cal",
      total: 0,
    },
    {
      item: "Pineapple",
      img: "https://cdn.pixabay.com/photo/2016/06/08/08/27/isolated-1443385_640.png",
      price: 72,
      txt: "51 cal",
      total: 0,
    },
    {
      item: "Banana",
      img: "https://cdn.pixabay.com/photo/2016/02/23/17/29/banana-1218133_640.png",
      price: 45,
      txt: "62 cal",
      total: 0,
    },
  ];

  const [cartitem, setCartitem] = useState(items);

  const add = (name, total) => {
    const newState = cartitem.map((obj) => {
      if (obj.item == name) {
        console.log("added", obj?.total, name);
        return total == "add"
          ? { ...obj, total: obj.total + 1 }
          : obj?.total > 0
          ? { ...obj, total: obj.total - 1 }
          : { ...obj, total: obj.total };
      }
      return obj;
    });
    setCartitem(newState);
  };

  return (
    <>
      <div className="relative flex flex-col justify-between h-screen overflow-hidden">
        <Total cartitem={cartitem} />

        <Cart items={items} cartitem={cartitem} add={add} />
        <Btm />
      </div>
    </>
  );
}

export default App;
