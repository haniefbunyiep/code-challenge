import db from "../../../db/db.json";
import ProductCard from "../Home/productOverview/ProductCard";

export default function OurMenu() {
  return (
    <div className="flex h-max w-screen flex-col items-center justify-between gap-20 bg-slate-200">
      <div className="flex h-10 w-[100%] items-center justify-center bg-purple-200">
        Our Menu
      </div>
      <div className="flex w-[80%] flex-col items-center gap-10 bg-red-200">
        <div className="flex w-full items-center justify-center bg-green-300">
          Coffee
        </div>
        <div className="grid w-max grid-cols-2 gap-10">
          {db.limited.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
``;
