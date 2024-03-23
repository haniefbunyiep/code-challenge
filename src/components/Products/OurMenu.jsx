import db from "../../../db/db.json";
import ProductCard from "../Home/productOverview/ProductCard";

export default function OurMenu() {
  return (
    <div className="flex h-max w-max flex-col items-center justify-between gap-16  py-10">
      {/* Menu */}
      <div className="flex h-10 w-full items-center  justify-center text-3xl font-bold text-shuttlegray">
        OUR MENU
      </div>
      <h2 className="flex w-[80%] items-center justify-center rounded-full border border-dashed border-shuttlegray p-2 text-lg font-bold text-shuttlegray">
        TYPE OF SERVICES AVAILABLE | Pick-up • Delivery • Coffee Catering
      </h2>
      {/* Coffe */}
      <div
        id="sectionCoffee"
        className="flex w-full flex-col items-center gap-10 "
      >
        <div className="flex w-full items-center justify-center  text-2xl font-bold text-shuttlegray">
          COFFE
        </div>
        <div className="grid w-max grid-cols-1 gap-10  md:grid-cols-2">
          {db.coffee.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
      {/* Coffee of The Day */}
      <div
        id="sectionCoffeeOTD"
        className="flex w-full flex-col items-center gap-10 "
      >
        <div className="flex w-full items-center justify-center  text-2xl font-bold text-shuttlegray">
          COFFE OF THE DAY
        </div>
        <div className="grid w-max grid-cols-1 gap-10  md:grid-cols-2">
          {db.coffee_otd.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
      {/* Food */}
      <div
        id="sectionFood"
        className="flex w-full flex-col items-center gap-10 "
      >
        <div className="flex w-full items-center justify-center  text-2xl font-bold text-shuttlegray">
          FOOD
        </div>
        <div className="grid w-max grid-cols-1 gap-10  md:grid-cols-2">
          {db.food.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
      {/* Limited */}
      <div
        id="sectionLimited"
        className="flex w-full flex-col items-center gap-10 "
      >
        <div className="flex w-full items-center justify-center  text-2xl font-bold text-shuttlegray">
          LIMITED COFFEE
        </div>
        <div className="grid w-max grid-cols-1 gap-10  md:grid-cols-2">
          {db.limited.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
``;
