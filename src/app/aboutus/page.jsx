import BannerAboutUs from "~/components/AboutUs/Banner/BannerAboutUs";
import Culture from "~/components/AboutUs/Culture/Culture";

export default function AboutUs() {
  return (
    <div className="flex w-full flex-col justify-around">
      <BannerAboutUs />
      <Culture />
    </div>
  );
}
