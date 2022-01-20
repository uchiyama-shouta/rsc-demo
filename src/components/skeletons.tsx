export default function Skeletons() {
  return (
    <div>
      {Array(30)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} />
        ))}
    </div>
  );
}

function Skeleton() {
  return (
    <div className="overflow-hidden my-[5px] animate-pulse">
      <span className="block mt-[6px] mb-[2px] w-[350px] max-w-full h-4 bg-gray-200"></span>
      <span className="block my-[5px] w-[250px] max-w-full h-[10px] bg-gray-200"></span>
    </div>
  );
}
