export default function Culture() {
  return (
    <div className="-mx-0 bg-apricot lg:-mx-20">
      <div className="lg:p-none flex flex-col items-center justify-center gap-[30px] p-10 lg:h-[900px]">
        {/* Header */}
        <h1 className="text-center text-lg font-bold text-pampas sm:text-3xl md:text-start">
          "Embracing Change, Sustaining Values"
        </h1>
        <h3 className="text-md rounded-full border border-dashed border-pampas p-2 text-pampas sm:text-2xl">
          We Stand Tall on Our Values
        </h3>
        {/* Content */}
        <div className="grid max-w-[300px] grid-cols-1 gap-14 pt-8 sm:max-w-[500px] lg:max-w-[900px] lg:grid-cols-2 lg:gap-14 xl:max-w-[1000px] xl:gap-20 xl:gap-x-24">
          <div className="border-base relative rounded-xl border-slate-500 bg-pampas p-4 pt-14 text-justify leading-relaxed text-shuttlegray shadow-2xl">
            <h1 className="flex justify-start pb-2 text-xl font-bold">AGILE</h1>
            <p className="text-xs sm:text-sm">
              Ability to adapt to various situations and actively be part of the
              change process for the benefit of the company and personal growth.
            </p>
            <img
              className="absolute -top-11 w-[90px] "
              src="https://fore.coffee/wp-content/uploads/2023/08/Group-1321314174.png"
              alt=""
            />
          </div>
          <div className="border-base relative rounded-xl border-slate-500 bg-pampas p-4 pt-14 text-justify leading-relaxed text-shuttlegray shadow-2xl">
            <h1 className="flex justify-start pb-2 text-xl font-bold">
              COLLABORATION
            </h1>
            <p className="text-xs sm:text-sm">
              Ability to build mutually supportive working relationships towards
              a common goal.
            </p>
            <img
              className="absolute -top-11 w-[90px] "
              src="https://fore.coffee/wp-content/uploads/2023/08/Group-1321314165.png"
              alt=""
            />
          </div>
          <div className="border-base relative rounded-xl border-slate-500 bg-pampas p-4 pt-14 text-justify leading-relaxed text-shuttlegray shadow-2xl">
            <h1 className="flex justify-start pb-2 text-xl font-bold">
              INTEGRITY
            </h1>
            <p className="text-xs sm:text-sm">
              Ability to behave consistently in accordance with company values,
              rules and policies. This includes communicating intentions, ideas
              and feelings openly and honestly.
            </p>
            <img
              className="absolute -top-11 w-[90px] "
              src="https://fore.coffee/wp-content/uploads/2023/08/Group-1321314166.png"
              alt=""
            />
          </div>
          <div className="border-base relative rounded-xl border-slate-500 bg-pampas p-4 pt-14 text-justify leading-relaxed text-shuttlegray shadow-2xl">
            <h1 className="flex justify-start pb-2 text-xl font-bold">
              MATTERS IN SERVING
            </h1>
            <p className="text-xs sm:text-sm">
              Ability is the main element to achieve work goals challenging and
              better work performance or above standard.
            </p>
            <img
              className="absolute -top-11 w-[90px] "
              src="https://fore.coffee/wp-content/uploads/2023/08/Group-1321314167.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
