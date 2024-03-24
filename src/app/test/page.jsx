"use client";
import fetchData from "~/api/fetchRandomUser";
import { Carousel } from "flowbite-react";

export default async function FetchingPage() {
  const { handleGetData } = fetchData();

  let get = await handleGetData();
  get = get?.results;
  console.log(get);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      Test Fetch
      <Carousel className="h-[500px] w-[700px] border-2 border-dashed border-shuttlegray bg-slate-500">
        <img
          className="h-full "
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          className="h-full "
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          className="h-full "
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
