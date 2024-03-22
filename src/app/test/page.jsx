"use client";
import { useState, useEffect } from "react";
import ProductCard from "~/components/Home/productOverview/ProductCard";
import Divider from "~/components/cores/Divider/Divider";

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const divider = document.querySelector(".fixed");
      if (window.scrollY >= divider.offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex h-full w-[1350px] flex-col items-center justify-center gap-20 bg-slate-200">
      <div>Our Menu</div>
      <div className={`fixed ${isFixed ? "opacity-100" : "opacity-0"}`}>
        <Divider />
      </div>
      <div className="flex">
        <div className="flex w-[20%] flex-auto items-center justify-center">
          Coffee
        </div>
        <div className="grid w-[60%] flex-auto grid-cols-2 gap-10">
          {db?.limited?.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
      <div className="fixed">
        <Divider />
      </div>
      <div className="flex">
        <div className="flex w-[20%] flex-auto items-center justify-center">
          Coffee
        </div>
        <div className="grid w-[60%] flex-auto grid-cols-2 gap-10">
          {db?.limited?.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
      <div className="fixed">
        <Divider />
      </div>
      <div className="flex">
        <div className="flex w-[20%] flex-auto items-center justify-center">
          Coffee
        </div>
        <div className="grid w-[60%] flex-auto grid-cols-2 gap-10">
          {db?.limited?.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
      <div className="fixed">
        <Divider />
      </div>
      <div className="flex">
        <div className="flex w-[20%] flex-auto items-center justify-center">
          Coffee
        </div>
        <div className="grid w-[60%] flex-auto grid-cols-2 gap-10">
          {db?.limited?.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
