import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function CompanyOverview() {
  return (
    <div>
      <div className="xl:hidden">
        <div className=" flex h-[900px] items-center justify-center gap-[100px]">
          <div className="flex h-full w-[60%] flex-col items-center justify-center gap-y-10 lg:w-full">
            <div className="text-center">
              <h1 className="font-Barlow-Bold flex w-full justify-start text-3xl font-bold text-shuttlegray">
                OUR STORY
              </h1>
            </div>
            <p className="text-md text-start leading-loose text-shuttlegray lg:text-lg">
              Established in 2018, Tomoro Coffee is a passionate coffee startups
              aiming to brew the best specialty coffee for our customer. As our
              name derived from the word forest, we aim to grow fast, strong,
              tall and bring life to our surrounding. We want our existence to
              increase coffee quality for our community.
            </p>
            <p className="text-md text-start leading-loose text-shuttlegray lg:text-lg">
              Leveraging network and experience, we are using the latest tech
              for our tools and bean blend. Directly from the selected farmer,
              high-quality beans are processed and roasted to perfection by
              ourselves then passed on to our skilled barista, excitedly prepare
              the cup of happiness to be served to you especially.
            </p>
            <button className="h-[60px] w-[150px] text-nowrap rounded-full border-2 bg-burnorange p-2 text-pampas hover:border-burnorange hover:bg-pampas hover:text-burnorange">
              <Link href="/aboutus">
                <div className="flex items-center justify-center">
                  Read More <MdKeyboardArrowRight size={25} />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <div className=" flex h-[900px] items-center justify-center gap-[100px]">
          <img
            className="h-auto w-[30%] object-cover"
            src="https://www.tomoro-coffee.com/img/about1.71f95995.png"
            alt=""
          />
          <div className="flex h-full w-[40%] flex-col items-center justify-center gap-y-8 ">
            <h1 className="font-Barlow-Bold flex w-full justify-start text-3xl font-bold text-shuttlegray">
              OUR STORY
            </h1>
            <p className="text-start leading-loose text-shuttlegray">
              Established in 2018, Tomoro Coffee is a passionate coffee startups
              aiming to brew the best specialty coffee for our customer. As our
              name derived from the word forest, we aim to grow fast, strong,
              tall and bring life to our surrounding. We want our existence to
              increase coffee quality for our community.
            </p>
            <p className="text-start leading-loose text-shuttlegray">
              Leveraging network and experience, we are using the latest tech
              for our tools and bean blend. Directly from the selected farmer,
              high-quality beans are processed and roasted to perfection by
              ourselves then passed on to our skilled barista, excitedly prepare
              the cup of happiness to be served to you especially.
            </p>
            <button className="h-[60px] w-[150px] text-nowrap rounded-full border-2 bg-burnorange p-2 text-pampas hover:border-burnorange hover:bg-pampas hover:text-burnorange">
              <Link href="/aboutus">
                <div className="flex items-center justify-center">
                  Read More <MdKeyboardArrowRight size={25} />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
