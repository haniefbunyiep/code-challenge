import BannerAboutUs from "~/components/AboutUs/Banner/BannerAboutUs";
import Culture from "~/components/AboutUs/Culture/Culture";
import OurTeams from "~/components/Teams/OurTeams";

export default function AboutUs() {
  return (
    <div className="flex w-full flex-col justify-between">
      <BannerAboutUs />
      <div className="mb-20">
        <OurTeams />
      </div>
      <Culture />
    </div>
  );
}
