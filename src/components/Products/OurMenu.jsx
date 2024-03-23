import db from "../../../db/db.json";
import ProductCard from "../Home/productOverview/ProductCard";

export default function OurMenu() {
  return (
    <div className="flex h-max w-max flex-col items-center justify-between gap-16 pb-10">
      {/* Menu */}
      <div className="flex h-max w-screen items-end justify-center bg-apricot text-3xl font-bold text-shuttlegray">
        <div className="h-full w-[20%] lg:w-[15%]">
          <h1 className="flex justify-start text-nowrap">MENU</h1>
          <h1 className="flex justify-center text-nowrap">MENU</h1>
          <h1 className="flex justify-end text-nowrap">MENU</h1>
        </div>
      </div>
      <h2 className="flex w-fit items-center justify-center text-nowrap rounded-full border border-dashed border-shuttlegray p-2 text-center text-[10px] font-bold text-shuttlegray sm:text-[15px] lg:w-[80%] lg:text-lg">
        TYPE OF SERVICES AVAILABLE | Pick-up • Delivery • Coffee Catering
      </h2>
      {/* Coffe */}
      <div
        id="sectionCoffee"
        className="flex w-full flex-col items-center gap-10 "
      >
        <div className="flex w-full items-center justify-center text-[17px] font-bold text-shuttlegray sm:text-[20px] lg:text-2xl">
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
        <div className="flex w-full items-center justify-center  text-[17px] font-bold text-shuttlegray sm:text-[20px] lg:text-2xl">
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
        <div className="flex w-full items-center justify-center  text-[17px] font-bold text-shuttlegray sm:text-[20px] lg:text-2xl">
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
        <div className="flex w-full items-center justify-center  text-[17px] font-bold text-shuttlegray sm:text-[20px] lg:text-2xl">
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
