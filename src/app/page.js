import BannerHomePage from "~/components/Home/Banner/BannerHomePage";
import CompanyOverview from "~/components/Home/companyOverview/CompanyOverview";
import FinalProductOverview from "~/components/Home/productOverview/ProductOverview";
import Testimoni from "~/components/Home/testimoni/Testimoni";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-around gap-y-10 md:gap-y-0">
      <BannerHomePage />
      <CompanyOverview />
      <Testimoni />
      <FinalProductOverview />
    </div>
  );
}
