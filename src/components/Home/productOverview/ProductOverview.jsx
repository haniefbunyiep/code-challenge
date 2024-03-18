export default function ProductOverview(props) {
  return (
    <>
      <figure>
        <img src={props.image} alt={props.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <div className="flex gap-4">
          <p>{props.description}</p>
        </div>
        <div>
          {
            <h1 className="text-xl">
              {props.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </h1>
          }
        </div>
      </div>
    </>
  );
}
