export default function TeamsCard(props) {
  return (
    <div>
      <div className="md:hidden">
        <div className="flex h-[500px] flex-col items-center justify-center gap-14 sm:h-[400px]">
          <div className="relative flex items-end justify-center bg-slate-200">
            <div className="avatar">
              <div className="rounded-full border-[11px] border-white md:h-[300px] lg:h-[350px]">
                <img
                  src={props.picture.large}
                  alt={`${props.name.first} ${props.name.last}`}
                />
              </div>
            </div>
            <div className="absolute -bottom-10 flex w-[200px] flex-col items-center justify-center rounded-xl bg-white p-2 shadow-md">
              <p className="font-bold">
                {props.name.first} {props.name.last}
              </p>
              <p className="font-light">{props.role.title}</p>
            </div>
          </div>
          <div className="flex w-screen flex-col items-center justify-start gap-5 bg-slate-200 p-2 sm:w-[450px]">
            <h1 className="font-Barlow-Bold flex w-full justify-center bg-blue-200 text-3xl font-bold text-shuttlegray">
              Our Experts Says
            </h1>
            <p className="h-fit bg-orange-200 text-justify text-[14px] font-light leading-snug text-shuttlegray">
              {props.role.description}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center justify-center md:gap-5 lg:gap-10">
          <div className="relative flex items-end justify-center bg-slate-200">
            <div className="avatar">
              <div className="rounded-full border-[11px] border-white md:h-[300px] lg:h-[350px]">
                <img
                  src={props.picture.large}
                  alt={`${props.name.first} ${props.name.last}`}
                />
              </div>
            </div>
            <div className="absolute -bottom-10 flex w-[200px] flex-col items-center justify-center rounded-xl bg-white p-2 shadow-md">
              <p className="font-bold">
                {props.name.first} {props.name.last}
              </p>
              <p className="font-light">{props.role.title}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-5 bg-slate-200 p-2 md:h-[300px] md:w-[400px] lg:h-[350px] lg:w-[450px]">
            <h1 className="font-Barlow-Bold flex w-full justify-center bg-blue-200 text-3xl font-bold text-shuttlegray">
              Our Experts Says
            </h1>
            <p className="h-fit bg-orange-200 text-justify text-[14px] font-light leading-snug text-shuttlegray">
              {props.role.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
