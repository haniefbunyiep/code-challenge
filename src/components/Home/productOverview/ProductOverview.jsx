import ProductCard from "./ProductCard";
import db from "../../../../db/db.json";
import Image from "next/image";

export default function FinalProductOverview() {
  return (
    <div className=" flex h-[900px] w-auto flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-lg font-bold text-shuttlegray sm:text-3xl">
          Coffee-OTD
        </h1>
        <h3 className="text-md rounded-full border border-dashed border-shuttlegray p-2 text-shuttlegray sm:text-2xl">
          Coffee Of The Moment
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:gap-14 lg:py-10">
        {db?.limited?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </div>
  );
}
