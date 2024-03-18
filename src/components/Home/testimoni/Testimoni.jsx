import TestiQuote from "~/components/Icon/HomeQuote";

export default function Testimoni() {
  return (
    <div className=" flex flex-col items-center justify-center gap-[30px] lg:h-[900px]">
      {/* Header */}
      <h1 className="text-lg font-bold text-shuttlegray sm:text-3xl">
        What They Say About
      </h1>
      <h3 className="text-md rounded-full border border-dashed border-shuttlegray p-2 text-shuttlegray sm:text-2xl">
        Our Successful Collaboration
      </h3>
      {/* Content */}
      <div className="grid w-[300px] gap-14 pt-8 sm:w-[400px] md:w-[700px] lg:w-[900px] lg:grid-cols-2 xl:w-[1000px] ">
        {/* Grid start */}
        <div className="border-base relative rounded-xl border-slate-500 bg-white p-4 text-justify leading-relaxed text-shuttlegray shadow-2xl">
          <div className="avatar flex justify-center">
            <div className="w-16 ">
              <img src="https://fore.coffee/wp-content/uploads/2020/06/download-1-1-56x56_c.png" />
            </div>
          </div>
          <h1 className="flex justify-start py-3 pb-2 text-sm font-bold">
            Devi Alfilovita
          </h1>
          <p className="py-3 pb-2 pt-1 text-xs font-bold leading-relaxed">
            "Key Account Manager at GrabFood"
          </p>
          <p className="py-3 text-sm leading-relaxed">
            Fore Coffee is one of the best merchants that I ever handled as a
            key account manager. we had a great journey to create some
            collaborations such as Exclusive Seasonal Menu, Percaya Projex, etc.
            The team was really helpful, organized, and had a fast response to
            coordinate everything.
          </p>
          <TestiQuote />
        </div>
        <div className="border-base relative rounded-xl border-slate-500 bg-white p-4 text-justify leading-relaxed text-shuttlegray shadow-2xl">
          <div className="avatar flex justify-center">
            <div className="w-16 rounded-full">
              <img src="https://fore.coffee/wp-content/uploads/2020/06/download-1-56x56_c.png" />
            </div>
          </div>
          <h1 className="flex justify-start py-3 pb-2 text-sm font-bold">
            Sumanda Tondang
          </h1>
          <p className="py-3 pb-2 pt-1 text-xs font-bold leading-relaxed">
            "Director of Fund Development at SOS Children’s Villages"
          </p>
          <p className="py-3 text-sm leading-relaxed">
            Kami sangat mengapresiasi inisiatif dari Fore Coffee untuk
            berkolaborasi bersama dalam kampanye ini. Semoga kolaborasi kami
            dengan Fore Coffee bisa menginspirasi banyak pihak terutama dalam
            melakukan kampanye kebaikan.
          </p>
          <TestiQuote />
        </div>
        <div className="border-base relative rounded-xl border-slate-500 bg-white p-4 text-justify leading-relaxed text-shuttlegray shadow-2xl">
          <div className="avatar flex justify-center">
            <div className="w-16">
              <img src="https://fore.coffee/wp-content/uploads/2020/06/GoFood_Square-56x56_c.png" />
            </div>
          </div>
          <h1 className="flex justify-start py-3 pb-2 text-sm font-bold">
            Nina Sudianto
          </h1>
          <p className="text-nowrap py-3 pb-2 pt-1 text-xs font-bold leading-relaxed">
            "Enterprise Merchant Partnerships at GoFood "
          </p>
          <p className="py-3 text-sm leading-relaxed">
            Fore Coffee is one of the most important GoFood merchants. As a
            partner, Fore is a very collaborative merchant because, during the
            pandemic when all businesses were sluggish, we were able to
            collaborate to rebuild from scratch in order to turn around the
            business and achieve tremendous grow
          </p>
          <TestiQuote />
        </div>
        <div className="border-base relative rounded-xl border-slate-500 bg-white p-4 text-justify leading-relaxed text-shuttlegray shadow-2xl">
          <div className="avatar flex justify-center">
            <div className="w-16 rounded-full">
              <img src="https://fore.coffee/wp-content/uploads/2020/08/77882837bf9a0b4e016702dcde11a125-56x56_c.png" />
            </div>
          </div>
          <h1 className="flex justify-start py-3 pb-2 text-sm font-bold">
            Rolin I Pemunda
          </h1>
          <p className="py-3 pb-2 pt-1 text-xs font-bold">
            "Onboard Product Lead at Citilink"
          </p>
          <p className="py-3 text-sm">
            Bekerja dengan Fore Coffee bagi kami, sangat menyenagkan karena kami
            bertemu dengan tim Fore Coffee yang sangat passionate, fun, fast
            respon dan INOVATIF baik untuk produk dan juga program Activation
            Onboard untuk penerbangan Citilink.
          </p>
          <TestiQuote />
        </div>
      </div>
    </div>
  );
}
