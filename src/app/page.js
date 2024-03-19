import BannerHomePage from "~/components/Home/Banner/BannerHomePage";
import CompanyOverview from "~/components/Home/companyOverview/CompanyOverview";
import ProductOverview from "~/components/Home/productOverview/ProductOverview";
import FinalProductOverview from "~/components/Home/productOverview/ProductOverview";
import TestProductOverview from "~/components/Home/productOverview/ProductCard";
import Testimoni from "~/components/Home/testimoni/Testimoni";

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-around">
      <BannerHomePage />
      <CompanyOverview />
      <Testimoni />
      {/* <FinalProductOverview /> */}
    </div>
  );
}
