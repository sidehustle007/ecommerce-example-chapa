import React from "react";
import axios from "axios";

function Tocheckout({ totalprice }) {
  const checkout = async () => {
    await axios
      .post("http://127.0.0.1:8000/pay", {
        amount: totalprice,
        rdurl: "http://localhost:5173",
      })
      .then((res) => {
        console.log(res);
        const chekouturl = res?.data?.detail?.data?.checkout_url;
        chekouturl && window.location.replace(chekouturl);
      });
  };
  return (
    <div
      className="bg-[#fe9d34] h-[3.25em] flex justify-center items-center text-white text-xl"
      onClick={() => (totalprice == 0 ? alert("pls add sth") : checkout())}
    >
      To checkout
    </div>
  );
}

export default Tocheckout;
