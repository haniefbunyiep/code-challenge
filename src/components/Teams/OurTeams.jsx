import fetchData from "~/api/fetchRandomUser";
import { Carousel } from "flowbite-react";
import TeamsCard from "./TeamsCard";

export default async function OurTeams() {
  const { handleGetData } = fetchData();

  let get = await handleGetData();
  get = get?.results;
  console.log(get);

  return (
    <div className="flex h-[600px] w-auto flex-col items-center justify-start gap-10  ">
      <h1 className="flex items-center justify-center p-2 text-3xl font-bold text-shuttlegray">
        Meet Our Teams
      </h1>
      <Carousel className="2xl:w-[65%] h-[80%] rounded-xl border-2 border-dashed border-shuttlegray bg-apricot">
        {get?.map((item, index) => (
          <div>
            <TeamsCard
              key={index}
              name={{
                first: item.name.first,
                last: item.name.last,
              }}
              role={{
                title: item.role.title,
                description: item.role.description,
              }}
              picture={{
                // thumbnail: item.picture.thumbnail,
                large: item.picture.large,
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
