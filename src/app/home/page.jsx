import BannerHomePage from "~/components/Home/Banner/BannerHomePage";
import FinalProductOverview from "~/components/Home/productOverview/ProductOverview";
import Testimoni from "~/components/Home/testimoni/Testimoni";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col justify-around">
      <BannerHomePage />
      <Testimoni />
      <FinalProductOverview />
    </div>
  );
}
