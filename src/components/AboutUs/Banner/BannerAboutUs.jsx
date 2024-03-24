export default function BannerAboutUs() {
  return (
    <div className="">
      {/* lower screen */}
      <div className="h-max xl:hidden">
        <div className="flex h-[900px] flex-col items-center justify-center mobile:gap-8 sm:h-[1350px] sm:gap-[15px]">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              className="h-auto w-[50%] object-cover"
              src="https://www.tomoro-coffee.com/img/about1.71f95995.png"
              alt=""
            />
          </div>
          {/* Text */}
          <div className="flex h-[50%] w-[70%] flex-col items-center justify-center gap-y-5  text-[9px] sm:text-sm">
            <h1 className="font-Barlow-Bold flex w-full justify-start text-3xl font-bold text-shuttlegray">
              OUR STORY
            </h1>
            <p className="text-start leading-loose text-shuttlegray">
              The founder of TOMORO has travelled across the world for years and
              has been to over 30 countries including Southeast Asia, South
              Asia, the Middle East, North Africa, and the Americas. This
              enabled him to deeply feel people’s passion for coffee culture
              from different countries, races, and occupations.
            </p>
            <p className="text-start leading-loose text-shuttlegray">
              The founder strives to pursue the ultimate passion for coffee and
              quality living by creating unique coffee humanities for TOMORO,
              ultimately introducing the ‘coffee culture’ to every corner of the
              world, and letting every customer enjoys a worthy cup of good
              coffee.
            </p>
            <p className="text-start leading-loose text-shuttlegray">
              TOMORO refers to “tomorrow“ and it means “embrace the goodness and
              yearn for tomorrow”. This is the original aspiration of TOMORO,
              strive to make every good cup of coffee with heart and encourage
              everyone to follow their heart bravely, feel the life with heart
              while yearning for tomorrow.
            </p>
          </div>
        </div>
      </div>
      {/* Banner xl above*/}
      <div className="hidden h-max xl:block">
        <div className=" flex h-[900px] items-center justify-center gap-x-[100px] ">
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
              The founder of TOMORO has travelled across the world for years and
              has been to over 30 countries including Southeast Asia, South
              Asia, the Middle East, North Africa, and the Americas. This
              enabled him to deeply feel people’s passion for coffee culture
              from different countries, races, and occupations.
            </p>
            <p className="text-start leading-loose text-shuttlegray">
              The founder strives to pursue the ultimate passion for coffee and
              quality living by creating unique coffee humanities for TOMORO,
              ultimately introducing the ‘coffee culture’ to every corner of the
              world, and letting every customer enjoys a worthy cup of good
              coffee.
            </p>
            <p className="text-start leading-loose text-shuttlegray">
              TOMORO refers to “tomorrow“ and it means “embrace the goodness and
              yearn for tomorrow”. This is the original aspiration of TOMORO,
              strive to make every good cup of coffee with heart and encourage
              everyone to follow their heart bravely, feel the life with heart
              while yearning for tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
