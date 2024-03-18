import BannerHomePage from "~/components/Home/Banner/BannerHomePage";
import ProductOverview from "~/components/Home/productOverview/ProductOverview";
import Testimoni from "~/components/Home/testimoni/Testimoni";

export default async function Home() {
  // Get
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
    <div className="flex w-full flex-col justify-around">
      <BannerHomePage />
      <Testimoni />
      {/* {limited?.map((product, index) => {
        return <ProductOverview key={index} {...product} />;
      })} */}
    </div>
  );
}
