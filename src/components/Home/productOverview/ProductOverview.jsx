import ProductCard from "./ProductCard";

export default async function FinalProductOverview() {
  const fetchLimitedProducts = async () => {
    try {
      const getLimitedProducts = await fetch("http://localhost:4000/limited", {
        cache: "no-cache",
      });
      const getLimited = await getLimitedProducts.json();
      console.log(getLimited);
      return getLimited;
    } catch (error) {
      console.log(error);
    }
  };

  const limited = await fetchLimitedProducts();
  return (
    <div className="flex h-[900px] w-auto flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-[30px]">
        <h1 className="text-lg font-bold text-shuttlegray sm:text-3xl">
          Coffee-OTD
        </h1>
        <h3 className="text-md rounded-full border border-dashed border-shuttlegray p-2 text-shuttlegray sm:text-2xl">
          Coffee Of The Moment
        </h3>
      </div>
      <div className="flex gap-10">
        {limited?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </div>
  );
}
