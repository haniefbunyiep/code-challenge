export default function ProductCard(props) {
  return (
    <div>
      <div>
        <div className="card w-[280px] rounded-none bg-pampas shadow-2xl">
          <figure>
            <img
              className="h-full object-cover"
              src={props.image}
              alt={props.name}
            />
          </figure>
          <div className="card-body h-[220px]">
            <h2 className="card-title py-2 text-sm leading-relaxed">
              {props.name}
            </h2>
            <p className=" py-2 text-sm leading-relaxed">{props.description}</p>
            <p className=" text-sm leading-relaxed">
              {props.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
