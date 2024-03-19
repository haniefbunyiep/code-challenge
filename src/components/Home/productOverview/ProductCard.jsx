export default function ProductCard(props) {
  return (
    <div className="flex gap-4 text-shuttlegray">
      <img
        className="h-[150px] lg:h-[200px]"
        src={props.image}
        alt={props.name}
      />
      <div className="flex h-[150px] w-[150px] flex-col items-center justify-center gap-2 gap-y-1  p-3 lg:h-[200px] lg:w-[300px] lg:gap-y-3">
        <p className="text-[10px] text-sm font-bold lg:text-[12px] xl:text-[15px]">
          {props.name}
        </p>
        <p className="text-[10px] lg:text-sm">
          {props.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <p className="text-[10px] lg:text-[12px]">{props.description}</p>
      </div>
    </div>
  );
}
